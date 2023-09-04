import create from 'zustand';

export const useStore = create((set) => ({
  //cart
  cart: {
    food: []
  },

  // add food in cart
  addFood: (data) => set((state) => {
    const updatedFood = [...state.cart.food];
    const index = updatedFood.findIndex((item) => item.name === data.name);

    if (index !== -1) {
      // If the food item already exists, merge the details
      updatedFood[index].quantity += data.quantity;
      updatedFood[index].total += data.quantity * data.price;
    } else {
      // If it doesn't exist, add it to the cart
      updatedFood.push(data);
    }

    return {
      cart: {
        food: updatedFood
      }
    };
  }),

  // remove food from cart
  removeFood: (index) => set((state) => ({
    cart: {
      food: state.cart.food.filter((_, i) => i !== index)
    }
  })),

  // reset cart
  resetCart: () => set(() => ({
    cart: {
      food: []
    }
  }))
}));
