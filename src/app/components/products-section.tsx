"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { useLanguage } from '../LanguageContext';// დარწმუნდი რომ წერტილები სწორია (../ ნიშნავს ერთით ზემოთ გასვლას)




export const productsData: any = {
  KA: [
    { id: 1, name: "მარწყვი სუპერი (უცხოური)", price: "22₾", category: "ხილი", img: "/products/strawberry.jpg" },
    { id: 2, name: "მოცვი", price: "65₾", category: "ხილი", img: "/products/blueberry.jpg" },
    { id: 3, name: "ავოკადო", price: "20₾", category: "ხილი", img: "/products/avocado.jpg" },
    { id: 4, name: "ბანანი", price: "5₾", category: "ხილი", img: "/products/banana.jpg" },
    { id: 5, name: "კუმკვატი", price: "18₾", category: "ხილი", img: "/products/Kumquat.jpg" },
    { id: 6, name: "ანანასი", price: "8.5₾", category: "ხილი", img: "/products/pineapple.jpg" },
    { id: 7, name: "მანგო", price: "15₾", category: "ხილი", img: "/products/mango.jpg" },
    { id: 8, name: "მანდარინი", price: "6₾", category: "ხილი", img: "/products/mandarin.jpg" },
    { id: 9, name: "პომელო", price: "7.5₾", category: "ხილი", img: "/products/pomelo.jpg" },
    { id: 10, name: "გრეიფრუტი", price: "6₾", category: "ხილი", img: "/products/grapefruit.jpg" },
    { id: 11, name: "ლაიმი", price: "21₾", category: "ხილი", img: "/products/lime.jpg" },
    { id: 12, name: "ფორთოხალი", price: "4₾", category: "ხილი", img: "/products/orange.jpg" },
    { id: 13, name: "ლიმონი", price: "3.5₾", category: "ხილი", img: "/products/lemon.jpg" },
    { id: 14, name: "ვაშლი სუპერი", price: "5₾", category: "ხილი", img: "/products/apple.png" },
    { id: 15, name: "ყურძენი (ტაიფუნი, ვანი, ერებუნი, თითა)", price: "6.5₾", category: "ხილი", img: "/products/grapes.jpg" },
    { id: 16, name: "მსხალი სუპერი", price: "13₾", category: "ხილი", img: "/products/pear.jpg" },
    { id: 17, name: "ხურმა", price: "4.5₾", category: "ხილი", img: "/products/persimmon karalyok.jpg" },
    { id: 18, name: "კივი", price: "8₾", category: "ხილი", img: "/products/kiwi.jpg" },
    { id: 19, name: "კარტოფილი", price: "1.5₾", category: "ბოსტნეული", img: "/products/potatoes.jpg" },
    { id: 20, name: "ბატატი", price: "10₾", category: "ბოსტნეული", img: "/products/sweetpotato.jpg" },
    { id: 21, name: "ჭარხალი", price: "1.3₾", category: "ბოსტნეული", img: "/products/beetroot.jpg" },
    { id: 22, name: "სტაფილო", price: "2₾", category: "ბოსტნეული", img: "/products/carrot.jpg" },
    { id: 23, name: "ბადრიჯანი", price: "7.5₾", category: "ბოსტნეული", img: "/products/eggplant.jpg" },
    { id: 24, name: "ყაბაყი", price: "8₾", category: "ბოსტნეული", img: "/products/zucchini.jpg" },
    { id: 25, name: "პომიდორი (აზერბაიჯანული, პლანტა, ჩერი, ტიტიანი, ფერადი)", price: "7₾", category: "ბოსტნეული", img: "/products/tomatoes.jpg" },
    { id: 26, name: "კიტრი (შუშის - 15ლ)", price: "7₾", category: "ბოსტნეული", img: "/products/cucumber.jpg" },
    { id: 27, name: "კომბოსტო (ჩვეულებრივი, წითელი, ყვავილოვანი)", price: "2₾", category: "ბოსტნეული", img: "/products/cabbage.jpg" },
    { id: 28, name: "ბულგარული (ფერადი - 10ლ)", price: "8₾", category: "ბოსტნეული", img: "/products/bellpepper.jpg" },
    { id: 29, name: "მწვანე წიწაკა", price: "9₾", category: "ბოსტნეული", img: "/products/greenpepper.jpg" },
    { id: 30, name: "მწვანილი (ჩვეულებრივი, მარნეულის)", price: "10₾", category: "მწვანილი", img: "/products/herbs.jpg" },
    { id: 31, name: "ტარხუნა", price: "130₾", category: "მწვანილი", img: "/products/tarragon.jpg" },
    { id: 32, name: "პიტნა", price: "55₾", category: "მწვანილი", img: "/products/mint.jpg" },
    { id: 33, name: "ხახვი", price: "1.5₾", category: "ბოსტნეული", img: "/products/onion.jpg" },
    { id: 34, name: "ნიორი", price: "6₾", category: "ბოსტნეული", img: "/products/garlic.jpg" },
    { id: 35, name: "სალათის ფურცელი", price: "7₾", category: "მწვანილი", img: "/products/lettuce leaf.jpg" },
    { id: 36, name: "მწვანე ლობიო", price: "13.5₾", category: "ბოსტნეული", img: "/products/greenbeans.jpg" },
    { id: 37, name: "ლობიო (ბათუმელა, მერცხალა, სხვა)", price: "8₾", category: "ბოსტნეული", img: "/products/bean field.jpeg" },
    { id: 38, name: "გოგრა სუპერი", price: "1₾", category: "ბოსტნეული", img: "/products/pumpkin.jpg" },
    { id: 39, name: "ბროწეული (სუპერი - 12ლ)", price: "8₾", category: "ხილი", img: "/products/pomegranate.jpg" },
    { id: 40, name: "ბოლოკი", price: "4.5₾", category: "ბოსტნეული", img: "/products/radish.jpg" },
    { id: 41, name: "შავი ბოლოკი", price: "6.5₾", category: "ბოსტნეული", img: "/products/blackradish.jpg" },
    { id: 42, name: "სოკო (ქამა)", price: "12₾", category: "ბოსტნეული", img: "/products/champignon.jpg" },
    { id: 43, name: "ნესვი", price: "10₾", category: "ხილი", img: "/products/melon.jpg" },
    { id: 44, name: "ჯანჯაფილი", price: "14.5₾", category: "ბოსტნეული", img: "/products/ginger.jpg" },
    { id: 45, name: "ქლიავი", price: "14₾", category: "ხილი", img: "/products/plum.jpg" },
    { id: 46, name: "ტყემალი (წითელი და მწვანე) 5 ლიტრი", price: "30₾", category: "სხვა", img: "/products/tkemali.jpg" },
    { id: 47, name: "ღერღილი", price: "6₾", category: "მარცვლეული", img: "/products/gergili.jpg" },
    { id: 48, name: "მჭადის ფქვილი", price: "5₾", category: "მარცვლეული", img: "/products/cornmeal.jpg" },
    { id: 49, name: "ნიგოზი სუპერი (38ლ) / უცხოური (30ლ)", price: "30-38₾", category: "თხილეული", img: "/products/Walnut.jpg" },
    { id: 50, name: "ნუში", price: "29.5₾", category: "თხილეული", img: "/products/Almond.jpg" },
    { id: 51, name: "გარჩეული თხილი", price: "40₾", category: "თხილეული", img: "/products/selectednuts.jpg" },
    { id: 52, name: "გარჩეული მზესუმზირა", price: "7.5₾", category: "თხილეული", img: "/products/sunflower.jpg" },
    { id: 53, name: "გოგრის მარცვალი (ქართული - 45ლ)", price: "23₾", category: "თხილეული", img: "/products/pumpkinseeds.jpg" },
    { id: 54, name: "წანდილი (საკორკოტე)", price: "3.5₾", category: "მარცვლეული", img: "/products/tsandili.jpeg" },
    { id: 55, name: "ქიშმიში სხვადასხვა კატეგორია) – 16, 19, 21, 24 ლარი", price: "16₾", category: "ჩირი", img: "/products/Raisins.jpg" },
    { id: 56, name: "ფისტაშკა ამერიკული", price: "47₾", category: "თხილეული", img: "/products/pistachio.jpg" },
    { id: 57, name: "ხურმის ჩირი (15ლ), ატმის სველი ჩირი (27ლ)", price: "15₾", category: "ჩირი", img: "/products/DriedfruitfromKaralyok.jpg" },
    { id: 58, name: "ჩირი ნატურალური მანგო, შაქარმოყრილი (30ლ)", price: "3₾", category: "ჩირი", img: "/products/dried mango.jpg" },
    { id: 59, name: "ქეშიუ", price: "37₾", category: "თხილეული", img: "/products/cashew.jpg" },
    { id: 60, name: "სომხური კურაგა", price: "45₾", category: "ჩირი", img: "/products/armeniandriedapricots.jpg" },
    { id: 61, name: "სომხური ქლიავის ჩირი", price: "35₾", category: "ჩირი", img: "/products/armeniandriedplums.jpg" },
    { id: 62, name: "ფინიკი სუპერი", price: "45₾", category: "ჩირი", img: "/products/date.jpg" },
    { id: 63, name: "ოსპი", price: "5₾", category: "მარცვლეული", img: "/products/lentils.jpg" },
    { id: 64, name: "მიწის თხილი მოხალული ნაჭუჭიანი", price: "12₾", category: "თხილეული", img: "/products/roastedpeanuts.jpg" },
    { id: 65, name: "ნუშის ფანტელი", price: "50₾", category: "თხილეული", img: "/products/almondflakes.jpg" },
    { id: 66, name: "სეზამის მარცვალი", price: "14₾", category: "თხილეული", img: "/products/sesameseeds.jpg" },
    { id: 67, name: "თეთრი კინუა", price: "18₾", category: "მარცვლეული", img: "/products/quinoa.jpg" },
    { id: 70, name: "ჩია", price: "19₾", category: "მარცვლეული", img: "/products/chia.jpg" },
    { id: 71, name: "სელის თესლი", price: "7.5₾", category: "მარცვლეული", img: "/products/flax seeds.jpg" },
    { id: 72, name: "წიწილა და ქათამი – 13-12 ლარი", price: "12-13₾", category: "ხორცი", img: "/products/chicken.png" },
    { id: 73, name: "ქარხნის ყველი", price: "25₾", category: "ყველი", img: "/products/factorycheese.jpg" },
    { id: 74, name: "სულგუნი საუკეთესო", price: "28₾", category: "ყველი", img: "/products/sulguni.jpeg" },
    { id: 75, name: "სულგუნი შებოლილი", price: "26₾", category: "ყველი", img: "/products/shebolilisulguni.jpg" },
    { id: 76, name: "იმერული ყველი", price: "21₾", category: "ყველი", img: "/products/imeruliyveli.jpeg" },
    { id: 77, name: "სომხური ყველი", price: "27₾", category: "ყველი", img: "/products/armenian cheese.jpg" },
    { id: 78, name: "თაფლი", price: "21₾", category: "სხვა", img: "/products/honey.jpg" },
    { id: 79, name: "თევზი – ფასი შეთანხმებით", price: "შეთანხმებით", category: "ხორცი", img: "/products/fish.jpg" }
  ],
  EN: [
    { id: 1, name: "Super Strawberry (Imported)", price: "22₾", category: "Fruit", img: "/products/strawberry.jpg" },
    { id: 2, name: "Blueberry", price: "65₾", category: "Fruit", img: "/products/blueberry.jpg" },
    { id: 3, name: "Avocado", price: "20₾", category: "Fruit", img: "/products/avocado.jpg" },
    { id: 4, name: "Banana", price: "5₾", category: "Fruit", img: "/products/banana.jpg" },
    { id: 5, name: "Kumquat", price: "18₾", category: "Fruit", img: "/products/Kumquat.jpg" },
    { id: 6, name: "Pineapple", price: "8.5₾", category: "Fruit", img: "/products/pineapple.jpg" },
    { id: 7, name: "Mango", price: "15₾", category: "Fruit", img: "/products/mango.jpg" },
    { id: 8, name: "Mandarin", price: "6₾", category: "Fruit", img: "/products/mandarin.jpg" },
    { id: 9, name: "Pomelo", price: "7.5₾", category: "Fruit", img: "/products/pomelo.jpg" },
    { id: 10, name: "Grapefruit", price: "6₾", category: "Fruit", img: "/products/grapefruit.jpg" },
    { id: 11, name: "Lime", price: "21₾", category: "Fruit", img: "/products/lime.jpg" },
    { id: 12, name: "Orange", price: "4₾", category: "Fruit", img: "/products/orange.jpg" },
    { id: 13, name: "Lemon", price: "3.5₾", category: "Fruit", img: "/products/lemon.jpg" },
    { id: 14, name: "Super Apple", price: "5₾", category: "Fruit", img: "/products/apple.png" },
    { id: 15, name: "Grapes (Typhoon, Vani, Erebuni, Tita)", price: "6.5₾", category: "Fruit", img: "/products/grapes.jpg" },
    { id: 16, name: "Super Pear", price: "13₾", category: "Fruit", img: "/products/pear.jpg" },
    { id: 17, name: "Persimmon", price: "4.5₾", category: "Fruit", img: "/products/persimmon karalyok.jpg" },
    { id: 18, name: "Kiwi", price: "8₾", category: "Fruit", img: "/products/kiwi.jpg" },
    { id: 19, name: "Potato", price: "1.5₾", category: "Vegetable", img: "/products/potatoes.jpg" },
    { id: 20, name: "Sweet Potato", price: "10₾", category: "Vegetable", img: "/products/sweetpotato.jpg" },
    { id: 21, name: "Beetroot", price: "1.3₾", category: "Vegetable", img: "/products/beetroot.jpg" },
    { id: 22, name: "Carrot", price: "2₾", category: "Vegetable", img: "/products/carrot.jpg" },
    { id: 23, name: "Eggplant", price: "7.5₾", category: "Vegetable", img: "/products/eggplant.jpg" },
    { id: 24, name: "Zucchini", price: "8₾", category: "Vegetable", img: "/products/zucchini.jpg" },
    { id: 25, name: "Tomato (Azerbaijani, Planta, Cherry, Titian, Mixed)", price: "7₾", category: "Vegetable", img: "/products/tomatoes.jpg" },
    { id: 26, name: "Cucumber (Greenhouse - 15L)", price: "7₾", category: "Vegetable", img: "/products/cucumber.jpg" },
    { id: 27, name: "Cabbage (Plain, Red, Cauliflower)", price: "2₾", category: "Vegetable", img: "/products/cabbage.jpg" },
    { id: 28, name: "Bell Pepper (Mixed - 10L)", price: "8₾", category: "Vegetable", img: "/products/bellpepper.jpg" },
    { id: 29, name: "Green Pepper", price: "9₾", category: "Vegetable", img: "/products/greenpepper.jpg" },
    { id: 30, name: "Greens (Plain, Marneuli)", price: "10₾", category: "Herbs", img: "/products/herbs.jpg" },
    { id: 31, name: "Tarragon", price: "130₾", category: "Herbs", img: "/products/tarragon.jpg" },
    { id: 32, name: "Mint", price: "55₾", category: "Herbs", img: "/products/mint.jpg" },
    { id: 33, name: "Onion", price: "1.5₾", category: "Vegetable", img: "/products/onion.jpg" },
    { id: 34, name: "Garlic", price: "6₾", category: "Vegetable", img: "/products/garlic.jpg" },
    { id: 35, name: "Lettuce Leaf", price: "7₾", category: "Herbs", img: "/products/lettuce leaf.jpg" },
    { id: 36, name: "Green Beans", price: "13.5₾", category: "Vegetable", img: "/products/greenbeans.jpg" },
    { id: 37, name: "Beans (Batumela, Mertskhala, etc.)", price: "8₾", category: "Vegetable", img: "/products/bean field.jpeg" },
    { id: 38, name: "Super Pumpkin", price: "1₾", category: "Vegetable", img: "/products/pumpkin.jpg" },
    { id: 39, name: "Pomegranate (Super - 12L)", price: "8₾", category: "Fruit", img: "/products/pomegranate.jpg" },
    { id: 40, name: "Radish", price: "4.5₾", category: "Vegetable", img: "/products/radish.jpg" },
    { id: 41, name: "Black Radish", price: "6.5₾", category: "Vegetable", img: "/products/blackradish.jpg" },
    { id: 42, name: "Mushroom (Champignon)", price: "12₾", category: "Vegetable", img: "/products/champignon.jpg" },
    { id: 43, name: "Melon", price: "10₾", category: "Fruit", img: "/products/melon.jpg" },
    { id: 44, name: "Ginger", price: "14.5₾", category: "Vegetable", img: "/products/ginger.jpg" },
    { id: 45, name: "Plum", price: "14₾", category: "Fruit", img: "/products/plum.jpg" },
    { id: 46, name: "Tkemali (Red and Green) 5 Liters", price: "30₾", category: "Other", img: "/products/tkemali.jpg" },
    { id: 47, name: "Gergili (Crushed Corn)", price: "6₾", category: "Grains", img: "/products/gergili.jpg" },
    { id: 48, name: "Cornmeal", price: "5₾", category: "Grains", img: "/products/cornmeal.jpg" },
    { id: 49, name: "Walnut Super (38L) / Imported (30L)", price: "30-38₾", category: "Nuts", img: "/products/Walnut.jpg" },
    { id: 50, name: "Almond", price: "29.5₾", category: "Nuts", img: "/products/Almond.jpg" },
    { id: 51, name: "Selected Hazelnut", price: "40₾", category: "Nuts", img: "/products/selectednuts.jpg" },
    { id: 52, name: "Shelled Sunflower Seeds", price: "7.5₾", category: "Nuts", img: "/products/sunflower.jpg" },
    { id: 53, name: "Pumpkin Seeds (Georgian - 45L)", price: "23₾", category: "Nuts", img: "/products/pumpkinseeds.jpg" },
    { id: 54, name: "Tsandili (Wheat Mix)", price: "3.5₾", category: "Grains", img: "/products/tsandili.jpeg" },
    { id: 55, name: "Raisins (Various Categories) – 16, 19, 21, 24 GEL", price: "16₾", category: "Dried Fruit", img: "/products/Raisins.jpg" },
    { id: 56, name: "American Pistachio", price: "47₾", category: "Nuts", img: "/products/pistachio.jpg" },
    { id: 57, name: "Dried Persimmon (15L), Soft Dried Peach (27L)", price: "15₾", category: "Dried Fruit", img: "/products/DriedfruitfromKaralyok.jpg" },
    { id: 58, name: "Natural Dried Mango, Candied (30L)", price: "3₾", category: "Dried Fruit", img: "/products/dried mango.jpg" },
    { id: 59, name: "Cashew", price: "37₾", category: "Nuts", img: "/products/cashew.jpg" },
    { id: 60, name: "Armenian Dried Apricots", price: "45₾", category: "Dried Fruit", img: "/products/armeniandriedapricots.jpg" },
    { id: 61, name: "Armenian Dried Plums", price: "35₾", category: "Dried Fruit", img: "/products/armeniandriedplums.jpg" },
    { id: 62, name: "Date Super", price: "45₾", category: "Dried Fruit", img: "/products/date.jpg" },
    { id: 63, name: "Lentils", price: "5₾", category: "Grains", img: "/products/lentils.jpg" },
    { id: 64, name: "Roasted Shelled Peanuts", price: "12₾", category: "Nuts", img: "/products/roastedpeanuts.jpg" },
    { id: 65, name: "Almond Flakes", price: "50₾", category: "Nuts", img: "/products/almondflakes.jpg" },
    { id: 66, name: "Sesame Seeds", price: "14₾", category: "Nuts", img: "/products/sesameseeds.jpg" },
    { id: 67, name: "White Quinoa", price: "18₾", category: "Grains", img: "/products/quinoa.jpg" },
    { id: 70, name: "Chia", price: "19₾", category: "Grains", img: "/products/chia.jpg" },
    { id: 71, name: "Flax Seeds", price: "7.5₾", category: "Grains", img: "/products/flax seeds.jpg" },
    { id: 72, name: "Chicken and Young Chicken – 13-12 GEL", price: "12-13₾", category: "Meat", img: "/products/chicken.png" },
    { id: 73, name: "Factory Cheese", price: "25₾", category: "Cheese", img: "/products/factorycheese.jpg" },
    { id: 74, name: "Sulguni Best", price: "28₾", category: "Cheese", img: "/products/sulguni.jpeg" },
    { id: 75, name: "Smoked Sulguni", price: "26₾", category: "Cheese", img: "/products/shebolilisulguni.jpg" },
    { id: 76, name: "Imereti Cheese", price: "21₾", category: "Cheese", img: "/products/imeruliyveli.jpeg" },
    { id: 77, name: "Armenian Cheese", price: "27₾", category: "Cheese", img: "/products/armenian cheese.jpg" },
    { id: 78, name: "Honey", price: "21₾", category: "Other", img: "/products/honey.jpg" },
    { id: 79, name: "Fish – Negotiable", price: "Negotiable", category: "Meat", img: "/products/fish.jpg" }
  ],
  RU: [
    { id: 1, name: "Клубника супер (импортная)", price: "22₾", category: "Фрукты", img: "/products/strawberry.jpg" },
    { id: 2, name: "Черника", price: "65₾", category: "Фрукты", img: "/products/blueberry.jpg" },
    { id: 3, name: "Авокадо", price: "20₾", category: "Фрукты", img: "/products/avocado.jpg" },
    { id: 4, name: "Банан", price: "5₾", category: "Фрукты", img: "/products/banana.jpg" },
    { id: 5, name: "Кумкват", price: "18₾", category: "Фрукты", img: "/products/Kumquat.jpg" },
    { id: 6, name: "Ананас", price: "8.5₾", category: "Фрукты", img: "/products/pineapple.jpg" },
    { id: 7, name: "Манго", price: "15₾", category: "Фрукты", img: "/products/mango.jpg" },
    { id: 8, name: "Мандарин", price: "6₾", category: "Фрукты", img: "/products/mandarin.jpg" },
    { id: 9, name: "Помело", price: "7.5₾", category: "Фрукты", img: "/products/pomelo.jpg" },
    { id: 10, name: "Грейпфрут", price: "6₾", category: "Фрукты", img: "/products/grapefruit.jpg" },
    { id: 11, name: "Лайм", price: "21₾", category: "Фрукты", img: "/products/lime.jpg" },
    { id: 12, name: "Апельсин", price: "4₾", category: "Фрукты", img: "/products/orange.jpg" },
    { id: 13, name: "Лимон", price: "3.5₾", category: "Фрукты", img: "/products/lemon.jpg" },
    { id: 14, name: "Яблоко супер", price: "5₾", category: "Фрукты", img: "/products/apple.png" },
    { id: 15, name: "Виноград (Тайфун, Вани, Эребуни, Тита)", price: "6.5₾", category: "Фрукты", img: "/products/grapes.jpg" },
    { id: 16, name: "Груша супер", price: "13₾", category: "Фрукты", img: "/products/pear.jpg" },
    { id: 17, name: "Хурма Королек", price: "4.5₾", category: "Фрукты", img: "/products/persimmon karalyok.jpg" },
    { id: 18, name: "Киви", price: "8₾", category: "Фрукты", img: "/products/kiwi.jpg" },
    { id: 19, name: "Картофель", price: "1.5₾", category: "Овощи", img: "/products/potatoes.jpg" },
    { id: 20, name: "Батат", price: "10₾", category: "Овощи", img: "/products/sweetpotato.jpg" },
    { id: 21, name: "Свекла", price: "1.3₾", category: "Овощи", img: "/products/beetroot.jpg" },
    { id: 22, name: "Морковь", price: "2₾", category: "Овощи", img: "/products/carrot.jpg" },
    { id: 23, name: "Баклажан", price: "7.5₾", category: "Овощи", img: "/products/eggplant.jpg" },
    { id: 24, name: "Кабачок", price: "8₾", category: "Овощи", img: "/products/zucchini.jpg" },
    { id: 25, name: "Помидоры (Азерб., Планта, Черри, Тициан, Цветные)", price: "7₾", category: "Овощи", img: "/products/tomatoes.jpg" },
    { id: 26, name: "Огурцы (Парниковые - 15л)", price: "7₾", category: "Овощи", img: "/products/cucumber.jpg" },
    { id: 27, name: "Капуста (обычн., красная, цветная)", price: "2₾", category: "Овощи", img: "/products/cabbage.jpg" },
    { id: 28, name: "Болгарский перец (цветной - 10л)", price: "8₾", category: "Овощи", img: "/products/bellpepper.jpg" },
    { id: 29, name: "Зеленый перец чили", price: "9₾", category: "Овощи", img: "/products/greenpepper.jpg" },
    { id: 30, name: "Зелень (Обычная, Марнеульская)", price: "10₾", category: "Зелень", img: "/products/herbs.jpg" },
    { id: 31, name: "Тархун", price: "130₾", category: "Зეлень", img: "/products/tarragon.jpg" },
    { id: 32, name: "Мята", price: "55₾", category: "Зелень", img: "/products/mint.jpg" },
    { id: 33, name: "Лук", price: "1.5₾", category: "Овощи", img: "/products/onion.jpg" },
    { id: 34, name: "Чеснок", price: "6₾", category: "Овощи", img: "/products/garlic.jpg" },
    { id: 35, name: "Лист салата", price: "7₾", category: "Зелень", img: "/products/lettuce leaf.jpg" },
    { id: 36, name: "Зеленая фасоль", price: "13.5₾", category: "Овощи", img: "/products/greenbeans.jpg" },
    { id: 37, name: "Фасоль (Батумела, Мерцхала, др.)", price: "8₾", category: "Овощи", img: "/products/bean field.jpeg" },
    { id: 38, name: "Тыква супер", price: "1₾", category: "Овощи", img: "/products/pumpkin.jpg" },
    { id: 39, name: "Гранат (супер - 12л)", price: "8₾", category: "Фрукты", img: "/products/pomegranate.jpg" },
    { id: 40, name: "Редис", price: "4.5₾", category: "Овощи", img: "/products/radish.jpg" },
    { id: 41, name: "Черная редька", price: "6.5₾", category: "Овощи", img: "/products/blackradish.jpg" },
    { id: 42, name: "Грибы (Шампиньоны)", price: "12₾", category: "Овощи", img: "/products/champignon.jpg" },
    { id: 43, name: "Дыня", price: "10₾", category: "Фрукты", img: "/products/melon.jpg" },
    { id: 44, name: "Имбирь", price: "14.5₾", category: "Овощи", img: "/products/ginger.jpg" },
    { id: 45, name: "Слива", price: "14₾", category: "Фрукты", img: "/products/plum.jpg" },
    { id: 46, name: "Ткемали (красный и зеленый) 5 литров", price: "30₾", category: "Другое", img: "/products/tkemali.jpg" },
    { id: 47, name: "Гергили (дробленая кукуруза)", price: "6₾", category: "Злаки", img: "/products/gergili.jpg" },
    { id: 48, name: "Кукурузная мука", price: "5₾", category: "Злаки", img: "/products/cornmeal.jpg" },
    { id: 49, name: "Грецкий орех супер (38л) / импорт. (30л)", price: "30-38₾", category: "Орехи", img: "/products/Walnut.jpg" },
    { id: 50, name: "Миндаль", price: "29.5₾", category: "Орехи", img: "/products/Almond.jpg" },
    { id: 51, name: "Очищенный фундук", price: "40₾", category: "Орехи", img: "/products/selectednuts.jpg" },
    { id: 52, name: "Очищенные семечки подсолнуха", price: "7.5₾", category: "Орехи", img: "/products/sunflower.jpg" },
    { id: 53, name: "Семена тыквы (Грузинские - 45л)", price: "23₾", category: "Орехи", img: "/products/pumpkinseeds.jpg" },
    { id: 54, name: "Цандили (пшеничная смесь)", price: "3.5₾", category: "Злаки", img: "/products/tsandili.jpeg" },
    { id: 55, name: "Изюм (разные категории) – 16, 19, 21, 24 лари", price: "16₾", category: "Сухофрукты", img: "/products/Raisins.jpg" },
    { id: 56, name: "Фисташки американские", price: "47₾", category: "Орехи", img: "/products/pistachio.jpg" },
    { id: 57, name: "Сушеная хурма (15л), вяленый персик (27л)", price: "15₾", category: "Сухофрукты", img: "/products/DriedfruitfromKaralyok.jpg" },
    { id: 58, name: "Манго натуральное сушеное, в сахаре (30л)", price: "3₾", category: "Сухофрукты", img: "/products/dried mango.jpg" },
    { id: 59, name: "Кешью", price: "37₾", category: "Орехи", img: "/products/cashew.jpg" },
    { id: 60, name: "Армянская курага", price: "45₾", category: "Сухофрукты", img: "/products/armeniandriedapricots.jpg" },
    { id: 61, name: "Армянский чернослив", price: "35₾", category: "Сухофрукты", img: "/products/armeniandriedplums.jpg" },
    { id: 62, name: "Финик супер", price: "45₾", category: "Сухофрукты", img: "/products/date.jpg" },
    { id: 63, name: "Чечевица", price: "5₾", category: "Злаки", img: "/products/lentils.jpg" },
    { id: 64, name: "Арахис жареный в скорлупе", price: "12₾", category: "Орехи", img: "/products/roastedpeanuts.jpg" },
    { id: 65, name: "Миндальные лепестки", price: "50₾", category: "Орехи", img: "/products/almondflakes.jpg" },
    { id: 66, name: "Кунжут", price: "14₾", category: "Орехи", img: "/products/sesameseeds.jpg" },
    { id: 67, name: "Белая киноа", price: "18₾", category: "Злаки", img: "/products/quinoa.jpg" },
    { id: 70, name: "Чиа", price: "19₾", category: "Злаки", img: "/products/chia.jpg" },
    { id: 71, name: "Семена льна", price: "7.5₾", category: "Злаки", img: "/products/flax seeds.jpg" },
    { id: 72, name: "Цыпленок и курица – 13-12 лари", price: "12-13₾", category: "Мясо", img: "/products/chicken.png" },
    { id: 73, name: "Сыр заводской", price: "25₾", category: "Сыр", img: "/products/factorycheese.jpg" },
    { id: 74, name: "Сулугуни лучший", price: "28₾", category: "Сыр", img: "/products/sulguni.jpeg" },
    { id: 75, name: "Сулугуни копченый", price: "26₾", category: "Сыр", img: "/products/shebolilisulguni.jpg" },
    { id: 76, name: "Имеретинский сыр", price: "21₾", category: "Сыр", img: "/products/imeruliyveli.jpeg" },
    { id: 77, name: "Армянский сыр", price: "27₾", category: "Сыр", img: "/products/armenian cheese.jpg" },
    { id: 78, name: "Мед", price: "21₾", category: "Другое", img: "/products/honey.jpg" },
    { id: 79, name: "Рыба – цена по договоренности", price: "По договоренности", category: "Мясо", img: "/products/fish.jpg" }
  ]
};


// 2. კატეგორიების თარგმანი
const categoryTranslations: any = {
  KA: ["ყველა", "ხილი", "ბოსტნეული", "ყველი", "თხილეული", "ჩირი", "მარცვლეული", "ხორცი", "მწვანილი", "სხვა"],
  EN: ["All", "Fruits", "Vegetables", "Cheese", "Nuts", "Dried Fruits", "Grains", "Meat", "Herbs", "Other"],
  RU: ["Все", "Фрукты", "Овощи", "Сыр", "Орехи", "Сухофрукты", "Злаки", "Мясо", "Зелень", "Другое"]
};

const uiTranslations: any = {
  KA: { title: "პროდუქტები", searchPlaceholder: "მოძებნე პროდუქტი...", priceLabel: "ფასი", moreBtn: "ნახე ყველა", lessBtn: "ნაკლები პროდუქტი" },
  EN: { title: "Products", searchPlaceholder: "Search product...", priceLabel: "Price", moreBtn: "View All", lessBtn: "Show Less" },
  RU: { title: "Продукты", searchPlaceholder: "Поиск продукта...", priceLabel: "Цена", moreBtn: "Показать все", lessBtn: "Показать меньше" }
};

export default function ProductsSection() {
  const { lang } = useLanguage();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const categories = categoryTranslations[lang] || categoryTranslations.KA;
  const t = uiTranslations[lang] || uiTranslations.KA;

  const filteredProducts = useMemo(() => {
    const currentData = productsData[lang] || productsData.KA;
    const kaCategory = categoryTranslations.KA[activeCategoryIndex];

    return currentData.filter((p: any) => {
      const matchesCategory = activeCategoryIndex === 0 || p.category === kaCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [lang, activeCategoryIndex, searchQuery]);

  const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 16);

  return (
    <section id="products" className="relative py-16 min-h-screen font-sans overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bg.png" 
          alt="Background" 
          fill 
          priority 
          quality={75}
          sizes="100vw"
          className="object-cover opacity-30 brightness-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
      </div>

      <div className="max-w-[1850px] mx-auto px-4 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
          <div className="flex items-center gap-6">
            <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
              <Image src="/symbol.png" alt="Symbol" fill className="object-contain" />
            </div>
            <div className="px-6 md:px-10 py-2 md:py-3 border-[1.5px] border-white/50 rounded-2xl bg-white/10 backdrop-blur-sm">
              <h2 className="text-white text-base md:text-lg tracking-[0.2em] uppercase font-semibold">
                {t.title}
              </h2>
            </div>
          </div>
          
          <div className="relative w-full lg:w-[400px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder={t.searchPlaceholder}
              className="w-full pl-12 pr-6 py-4 bg-white/95 rounded-2xl outline-none text-black font-semibold text-sm focus:ring-2 focus:ring-[#b89e5d]"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat: string, index: number) => (
            <button
              key={index}
              onClick={() => { setActiveCategoryIndex(index); setShowAll(false); }}
              className={`px-6 py-2.5 rounded-xl font-bold uppercase text-[9px] tracking-widest transition-all ${
                activeCategoryIndex === index ? 'bg-[#b89e5d] text-white shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
          <AnimatePresence mode='popLayout'>
            {visibleProducts.map((product: any, idx: number) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={product.id}
                className="group bg-white/95 rounded-[24px] overflow-hidden shadow-xl border border-white/20 flex flex-col h-full"
              >
                <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                  <Image 
                    src={product.img} 
                    alt={product.name} 
                    fill 
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                    priority={idx < 8}
                    loading={idx < 8 ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/70 px-3 py-1 rounded-full text-[8px] font-black text-white border border-white/10">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-[13px] font-black text-black mb-auto leading-tight min-h-[32px]">
                    {product.name}
                  </h3>
                  <div className="mt-5 flex justify-between items-center border-t border-gray-100 pt-4">
                    <div>
                      <p className="text-gray-400 text-[8px] uppercase font-black">{t.priceLabel}</p>
                      <p className="text-xl font-black text-black">{product.price}</p>
                    </div>
                    <button className="bg-black text-white w-9 h-9 rounded-xl hover:bg-[#b89e5d] transition-all">+</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length > 16 && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-12 py-5 rounded-2xl bg-white text-black font-black uppercase text-[10px] hover:bg-[#b89e5d] hover:text-white transition-all shadow-2xl"
            >
              {showAll ? t.lessBtn : `${t.moreBtn} (${filteredProducts.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}