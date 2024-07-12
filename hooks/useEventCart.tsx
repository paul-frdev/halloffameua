import { Event } from "@/types";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
  events: Event[];
  addItem: (data: Event) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useEventCart = create(
  persist<CartStore>(
    (set, get) => ({
      events: [],
      addItem: (data: Event) => {
        const currentItems = get().events;
        const existingItem = currentItems.find(item => item.event_id === data.event_id);

        if (existingItem) {
          return console.log("Event is already in cart");
        }

        set({ events: [...get().events, data] });
        console.log("Event added to cart");
      },
      removeItem: (id: string) => {
        set({ events: [...get().events.filter(item => item.event_id !== id)] });
        console.log("Event removed");
      },
      removeAll: () => set({ events: [] }),
    }),
    {
      name: "event-cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useEventCart;
