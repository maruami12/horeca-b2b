"use client";

import React, {useEffect, useMemo, useState} from 'react';
import Image from 'next/image';
import {AnimatePresence, motion} from 'framer-motion';
import {Search} from 'lucide-react';
import {useLanguage} from '../LanguageContext';
import {allProductsQuery, sanityClient, type ProductListItem, urlForImage} from '@/lib/sanity.client';

const categoryTranslations: Record<string, string[]> = {
  KA: ['ყველა', 'ხილი', 'ბოსტნეული', 'ყველი', 'თხილეული', 'ჩირი', 'მარცვლეული', 'ხორცი', 'მწვანილი', 'სხვა'],
  EN: ['All', 'Fruits', 'Vegetables', 'Cheese', 'Nuts', 'Dried Fruits', 'Grains', 'Meat', 'Herbs', 'Other'],
  RU: ['Все', 'Фрукты', 'Овощи', 'Сыр', 'Орехи', 'Сухофрукты', 'Злаки', 'Мясо', 'Зелень', 'Другое'],
};

const uiTranslations: Record<
  string,
  {title: string; searchPlaceholder: string; priceLabel: string; moreBtn: string; lessBtn: string}
> = {
  KA: {
    title: 'პროდუქტები',
    searchPlaceholder: 'მოძებნე პროდუქტი...',
    priceLabel: 'ფასი',
    moreBtn: 'ნახე ყველა',
    lessBtn: 'ნაკლები პროდუქტი',
  },
  EN: {
    title: 'Products',
    searchPlaceholder: 'Search product...',
    priceLabel: 'Price',
    moreBtn: 'View All',
    lessBtn: 'Show Less',
  },
  RU: {
    title: 'Продукты',
    searchPlaceholder: 'Поиск продукта...',
    priceLabel: 'Цена',
    moreBtn: 'Показать все',
    lessBtn: 'Показать меньше',
  },
};

type UiProduct = {id: string; name: string; category: string; price: string; img: string};

export default function ProductsSection() {
  const {lang} = useLanguage();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [sanityProducts, setSanityProducts] = useState<ProductListItem[]>([]);
  const [sanityError, setSanityError] = useState<string | null>(null);

  const categories = categoryTranslations[lang] ?? categoryTranslations.KA;
  const t = uiTranslations[lang] ?? uiTranslations.KA;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await sanityClient.fetch<ProductListItem[]>(allProductsQuery);
        if (!cancelled) setSanityProducts(data);
      } catch (err) {
        if (!cancelled) setSanityError(err instanceof Error ? err.message : 'Failed to load products');
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const products: UiProduct[] = useMemo(
    () =>
      sanityProducts.map((p) => ({
        id: p._id,
        name: p.name,
        category: p.category ?? '',
        price: typeof p.price === 'number' ? `${p.price}₾` : '—',
        img: p.image ? urlForImage(p.image).width(800).height(800).fit('crop').url() : '',
      })),
    [sanityProducts],
  );

  const filteredProducts = useMemo(() => {
    const kaCategory = categoryTranslations.KA[activeCategoryIndex];
    const q = searchQuery.trim().toLowerCase();

    return products.filter((p) => {
      const matchesCategory = activeCategoryIndex === 0 || p.category === kaCategory;
      const matchesSearch = !q || p.name.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategoryIndex, searchQuery]);

  const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 16);

  return (
    <section id="products" className="relative py-24 min-h-screen overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0">
        <Image src="/bg.png" alt="Background" fill priority className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="max-w-[1850px] mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-16 h-16 md:w-20 md:h-20 relative transform -translate-y-[4px] flex-shrink-0">
              <Image src="/symbol.png" alt="Symbol" fill className="object-contain" />
            </div>
            <div className="border-[2px] border-white/50 rounded-[24px] px-8 md:px-14 py-4 md:py-5 bg-white/10 backdrop-blur-sm">
              <h2 className="title-caps text-2xl md:text-3xl text-white">{t.title}</h2>
            </div>
          </div>

          <div className="relative w-full lg:w-[450px]">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="search-input-caps w-full pl-14 pr-6 py-5 bg-white/95 rounded-[20px] outline-none text-black font-semibold text-base focus:ring-2 focus:ring-[#b89e5d] transition-all"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {sanityError ? <p className="mb-10 text-sm text-red-300">{sanityError}</p> : null}

        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategoryIndex(index);
                setShowAll(false);
              }}
              className={`px-8 py-3 rounded-xl title-caps text-[11px] transition-all duration-300 ${
                activeCategoryIndex === index
                  ? 'bg-[#b89e5d] text-white shadow-lg scale-105'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((product) => (
              <motion.div
                layout
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, scale: 0.9}}
                key={product.id}
                className="group bg-white/95 rounded-[28px] overflow-hidden shadow-2xl border border-white/20 flex flex-col h-full hover:translate-y-[-5px] transition-transform duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  {product.img ? (
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : null}
                  {product.category ? (
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] title-caps text-white border border-white/10">
                        {product.category}
                      </span>
                    </div>
                  ) : null}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="title-caps text-[13px] md:text-[14px] text-black mb-auto leading-tight min-h-[42px]">
                    {product.name}
                  </h3>
                  <div className="mt-6 flex justify-between items-center border-t border-gray-100 pt-5">
                    <div>
                      <p className="title-caps text-gray-400 text-[9px] tracking-wider">{t.priceLabel}</p>
                      <p className="text-2xl font-black text-black">{product.price}</p>
                    </div>
                    <button className="bg-black text-white w-10 h-10 rounded-2xl hover:bg-[#b89e5d] hover:scale-110 transition-all flex items-center justify-center text-xl shadow-lg">
                      +
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length > 16 ? (
          <div className="mt-20 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-16 py-5 rounded-2xl bg-white text-black title-caps text-[13px] hover:bg-[#b89e5d] hover:text-white transition-all shadow-xl"
            >
              {showAll ? t.lessBtn : `${t.moreBtn} (${filteredProducts.length})`}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

