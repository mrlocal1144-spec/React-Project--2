
import { createSlice } from "@reduxjs/toolkit";

const petData = {
  Dog: [ ["Buddy", "Golden Retriever"],["Max", "German Shepherd"],["Charlie", "Labrador"],["Rocky", "Pug"],["Bruno", "Beagle"],["Cooper", "Siberian Husky"],["Teddy", "Pomeranian"],["Leo", "Shih Tzu"],["Oscar", "Rottweiler"], ["Milo", "Dachshund"],["Duke", "Doberman"],["Bailey", "Boxer"],["Jack", "Chihuahua"],["Toby", "Indian Pariah"],["Oreo", "Dalmatian"] ], 

  Cat: [ ["Luna", "Persian"],["Simba", "Bengal"],["Misty", "Siamese"],["Coco", "Maine Coon"],["Kitty", "British Shorthair"],["Milo", "Ragdoll"],["Bella", "Himalayan"],["Ollie", "Sphynx"],["Lily", "American Shorthair"],["Snowy", "Turkish Angora"],["Leo", "Russian Blue"],["Chloe", "Scottish Fold"],["Nala", "Abyssinian"],["Pepper", "Bombay"],["Mittens", "Indian Domestic Cat"] ],

  Bird: [ ["Rio", "Parrot"],["Kiwi", "Budgerigar"],["Sunny", "Cockatiel"],["Coco", "Lovebird"],["Sky", "Macaw"],["Peppy", "Finch"],["Tweety", "Canary"],["Blue", "Indian Ringneck"],["Mango", "Conure"],["Piku", "African Grey"],["Ruby", "Rosella"],["Chirpy", "Dove"],["Angel", "Cockatoo"],["Rainbow", "Lorikeet"],["Bubbles", "Parakeet"] ],

  Rabbit: [ ["Snowball", "Holland Lop"],["Fluffy", "Lionhead"],["Bunny", "Mini Rex"],["Cotton", "Dutch Rabbit"],["Mochi", "Angora Rabbit"],["Cinnamon", "Netherland Dwarf"] ],

  Snake: [ ["Monty", "Ball Python"],["Cobra", "King Snake"],["Noodle", "Corn Snake"],["Ziggy", "Milk Snake"],["Shadow", "Boa Constrictor"],["Rocky", "Rosy Boa"],["Sly", "Rat Snake"],["Jade", "Green Tree Python"],["Sunny", "Garter Snake"],["Stripe", "King Snake"] ]

};

const petImages = {
  Dog: [
    "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600",
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600",
    "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=600",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600",
    "https://tse4.mm.bing.net/th/id/OIP.m6J9fotBuowg3y4GV-wQTAHaD0?r=0&pid=Api&h=220&P=0",
    "https://tse2.mm.bing.net/th/id/OIP.KD7b44xNZV4JQSCeuN-RNwHaE8?r=0&pid=Api&h=220&P=0",
    "https://tse4.mm.bing.net/th/id/OIP.sVRUWhIVJFWT-x8IefTtngHaG4?r=0&pid=Api&h=220&P=0",
    "https://tse2.mm.bing.net/th/id/OIP.B-R79EK4L_F-VIY9bAQ-_QHaE8?r=0&pid=Api&h=220&P=0",
    "https://tse3.mm.bing.net/th/id/OIP.oUj2EUfJmP33el_Z17hm0wHaEm?r=0&pid=Api&h=220&P=0",
    "https://tse3.mm.bing.net/th/id/OIP.vjJdtip2B8UP5LPVsZD_TgHaFg?r=0&pid=Api&h=220&P=0",
    "https://tse2.mm.bing.net/th/id/OIP.ZHXfMDt_kQD7-HAdUypjbAHaFd?r=0&pid=Api&h=220&P=0",
    "https://tse2.mm.bing.net/th/id/OIP.tDVzLBij7hzOFx-lLJ9V2wHaEk?r=0&pid=Api&h=220&P=0",
    "https://tse2.mm.bing.net/th/id/OIP.y4Qd20izWDCilKiPkmOxNwHaFz?r=0&pid=Api&h=220&P=0",
    "https://pethelpful.com/.image/w_3840,q_auto:good,c_limit/MjAxMTY5NTU4ODY4OTkzNTU4/dalmatian-guide.jpg"
  ],
  Cat: [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600",
    "https://tse1.mm.bing.net/th/id/OIP.GM0lfpGe9rMqPxMMe6L0JAHaEO?r=0&pid=Api&h=220&P=0",
    "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600",
    "https://tse2.mm.bing.net/th/id/OIP.RjPzZl-qcapoSglue-2I2gHaHx?r=0&pid=Api&h=220&P=0",
    "https://tse3.mm.bing.net/th/id/OIP.RIbIly6AmQmuvFbz3UXSEQHaFj?r=0&pid=Api&h=220&P=0",
    "https://tse1.mm.bing.net/th/id/OIP.D238axAfIZfz89UardDCFQHaIC?r=0&pid=Api&h=220&P=0",
    "https://a-z-animals.com/media/2023/05/shutterstock_653722324-2048x1339.jpg",
    "https://tse2.mm.bing.net/th/id/OIP.4NHtw1L8AmB2fSYr_1n2ygHaE7?r=0&pid=Api&h=220&P=0",
    "https://tse2.mm.bing.net/th/id/OIP.TBPNYkT3c3CRyh4I1KdqFQHaFj?r=0&pid=Api&h=220&P=0",
    "https://tse4.mm.bing.net/th/id/OIP.t-vWQW1GwUjZUbGjSDL_bQHaE8?r=0&pid=Api&h=220&P=0",
    "https://tse4.mm.bing.net/th/id/OIP.4osH-B4fi42Ug51Vb5yfTwHaKn?r=0&pid=Api&h=220&P=0",
    "https://tse4.mm.bing.net/th/id/OIP.KCvmJuej9U3MiZ8IVIQRXgHaEK?r=0&pid=Api&h=220&P=0",
    "https://tse3.mm.bing.net/th/id/OIP.KypVPizjAhaylB0WW8SJYQHaE7?r=0&pid=Api&h=220&P=0",
    "https://tse1.mm.bing.net/th/id/OIP.NaaduWKd38VNvw8vsQ8-zAHaE7?r=0&pid=Api&h=220&P=0",
    "https://tse1.mm.bing.net/th/id/OIP.1ffKZIai0cqm1Gi50LtqUQHaFj?r=0&pid=Api&h=220&P=0"
  ],
  Bird: [
    "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600",
    "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=600",
    "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600",
    "https://a-z-animals.com/media/2022/06/Lovebirds-on-fence.jpg",
    "https://i.pinimg.com/originals/2d/a1/9a/2da19a0e5786e6be35cbd4b2e1c9ad2c.jpg",
    "https://tse2.mm.bing.net/th/id/OIP.BN_HBEwfFhm2FejwflgyaAHaFj?r=0&pid=Api&h=220&P=0",
    "https://tse2.mm.bing.net/th/id/OIP.A2uVP2JWJHGOLOtN_-ZKPAHaGc?r=0&pid=Api&h=220&P=0",
    "https://tse1.mm.bing.net/th/id/OIP.eOx4qAPlqkmexuHl4p5fLAHaH8?r=0&pid=Api&h=220&P=0",
    "https://tse2.mm.bing.net/th/id/OIP.eckBqPqfkpMfTo47026-5wHaHr?r=0&pid=Api&h=220&P=0",
    "https://tse2.mm.bing.net/th/id/OIP.xXWoiT8oDPGDxv7oKei6FQHaHa?r=0&pid=Api&h=220&P=0",
    "https://tse1.mm.bing.net/th/id/OIP._YFgAGeEEUw2rDlHuAUNLgHaE6?r=0&pid=Api&h=220&P=0",
    "https://tse2.mm.bing.net/th/id/OIP.nZvT15U7qdriQw981CUQ2QHaE5?r=0&pid=Api&h=220&P=0",
    "https://tse1.mm.bing.net/th/id/OIP.vR470lA_KKvRRtS-7yxKnwHaFj?r=0&pid=Api&h=220&P=0",
    "https://tse2.mm.bing.net/th/id/OIP.c5S97jbo4acCd3P1dMCT0wHaE7?r=0&pid=Api&h=220&P=0",
    "https://tse2.mm.bing.net/th/id/OIP.ZC6-er-oidxDC_6LwqETRwHaEK?r=0&pid=Api&h=220&P=0"
  ],
  Rabbit: [
    "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600",
    "https://tse2.mm.bing.net/th/id/OIP.sU7ujcujltODvvYU8Fe23QHaFj?r=0&pid=Api&h=220&P=0",
    "https://tse4.mm.bing.net/th/id/OIP.bPfCMPDj8xlyLUTFIHLU5wHaFj?r=0&pid=Api&h=220&P=0",
    "https://tse3.mm.bing.net/th/id/OIP.fJ0Sh6UAIumc4jV-Zj6mvgHaFo?r=0&pid=Api&h=220&P=0",
    "https://tse1.mm.bing.net/th/id/OIP.ZC_vrncZ6klUuCGAwo5dFAHaF8?r=0&pid=Api&h=220&P=0",
    "https://tse3.mm.bing.net/th/id/OIP.lERQH1CrtLx0pLzSRruixwHaF-?r=0&pid=Api&h=220&P=0"
  ],
  Snake: [
    "https://tse3.mm.bing.net/th/id/OIP.d7OI7rTTgtUi83pkOkWoXQHaF_?r=0&pid=Api&h=220&P=0",
    "https://tse4.mm.bing.net/th/id/OIP.Wvox9J_UXwpYdAecvcnTQQHaE8?r=0&pid=Api&h=220&P=0",
    "https://tse4.mm.bing.net/th/id/OIP.IEMZkP9F1qwFbCH-LH8migHaHa?r=0&pid=Api&h=220&P=0",
    "https://tse3.mm.bing.net/th/id/OIP.R60-OiRnWHTK5_wqa21RCQHaFV?r=0&pid=Api&h=220&P=0",
    "https://tse1.mm.bing.net/th/id/OIP.VCaJpPwj1VPNOVoLrltr8wHaFj?r=0&pid=Api&h=220&P=0",
    "https://tse2.mm.bing.net/th/id/OIP.rXuZRLXMCv8ABeHMzk22zgHaGG?r=0&pid=Api&h=220&P=0",
    "https://tse2.mm.bing.net/th/id/OIP.KItZQlhWE-WIckzobE_9SQHaFj?r=0&pid=Api&h=220&P=0",
    "https://tse3.mm.bing.net/th/id/OIP.rMi7SexmzpRVxUeOqKE3_wHaFj?r=0&pid=Api&h=220&P=0",
    "https://i.redd.it/ayvmi4a70f431.jpg",
    "https://tse3.mm.bing.net/th/id/OIP.ZMNipjwanGX13XieeImuVwHaJQ?r=0&pid=Api&h=220&P=0"
  ]
};

const initialPets = Object.entries(petData).flatMap(([type, items]) =>
  items.map(([name, breed], index) => ({
    id: `${type.toLowerCase()}-${index + 1}`,
    name,
    type,
    breed,
    age: `${1 + (index % 5)} years`,
    price: 1000 + index * 100,
    image: petImages[type][index % petImages[type].length],
    description: `Meet ${name}, a lovely ${breed} looking for a caring home.`
  }))
);

const petSlice = createSlice({
  name: "pets",
  initialState: {
    items: initialPets
  },
  reducers: {
    addPet: (state, action) => {
      state.items.push({
        ...action.payload,
        id: action.payload.id || Date.now().toString()
      });
    },
    updatePet: (state, action) => {
      const index = state.items.findIndex(
        pet => pet.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deletePet: (state, action) => {
      state.items = state.items.filter(
        pet => pet.id !== action.payload
      );
    }
  }
});

export const { addPet, updatePet, deletePet } = petSlice.actions;
export default petSlice.reducer;
