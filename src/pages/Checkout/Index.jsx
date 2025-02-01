import React from "react";
import { useGetuserCartItemQuery } from "../../Features/Api/exclusiveApi";

const Checkout = () => {
  const { data, isLoading, isError } = useGetuserCartItemQuery();
  console.log(data?.data?.userCartItem);

  return (
    <div className="container py-[100px]">
      <div class="font-popins bg-white">
        <div class="max-lg:max-w-xl mx-auto w-full">
          <div class="grid lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
              <div class="text-center max-lg:hidden">
                <h2 class="text-3xl font-bold text-gray-800 inline-block border-b-2 border-gray-800 pb-1">
                  Checkout
                </h2>
              </div>

              <form class="lg:mt-16">
                <div>
                  <h2 class="text-xl font-bold text-gray-800">Shipping info</h2>

                  <div class="grid sm:grid-cols-2 gap-8 mt-8">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        class="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email address"
                        class="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Street address"
                        class="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="City"
                        class="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="State"
                        class="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Postal code"
                        class="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div class="mt-16">
                  <h2 class="text-xl font-bold text-gray-800">
                    Payment method
                  </h2>

                  <div class="grid gap-4 sm:grid-cols-2 mt-4">
                    <div class="flex items-center">
                      <label for="card" class=" flex gap-2 cursor-pointer">
                        <img
                          src="https://readymadeui.com/images/visa.webp"
                          class="w-12"
                          alt="card1"
                        />
                        <img
                          src="https://readymadeui.com/images/american-express.webp"
                          class="w-12"
                          alt="card2"
                        />
                        <img
                          src="https://readymadeui.com/images/master.webp"
                          class="w-12"
                          alt="card3"
                        />
                      </label>
                    </div>

                    <div class="flex items-center">
                      <button
                        type="button"
                        class="px-5 py-3 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-orange-700 hover:bg-orange-800 active:bg-orange-700"
                      >
                        Cash On Delivery
                      </button>
                    </div>
                  </div>

                  <div class="grid gap-8 mt-8">
                    <div class="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label for="remember-me" class="ml-3 block text-sm">
                        I accept the{" "}
                        <a
                          href="javascript:void(0);"
                          class="text-blue-600 font-semibold hover:underline ml-1"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="flex flex-wrap gap-4 mt-8">
                  <button
                    type="button"
                    class="min-w-[150px] px-6 py-3.5 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    class="min-w-[150px] px-6 py-3.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Confirm payment $240
                  </button>
                </div>
              </form>
            </div>

            <div class="bg-gray-100 lg:h-screen lg:sticky lg:top-0 lg:max-w-[430px] w-full lg:ml-auto">
              <div class="relative h-full">
                <div class="p-6 overflow-auto max-lg:max-h-[450px] lg:h-[calc(100vh-50px)]">
                  <h2 class="text-xl font-bold text-gray-800">Order Summary</h2>

                  <div class="space-y-6 mt-8">
                    {data?.data?.userCartItem?.map((item) => (
                      <div class="flex gap-4  ">
                        <div class="w-[124px] h-[100px] flex items-center justify-center p-4 shrink-0 bg-gray-200 rounded-lg">
                          <img
                            src={item.product.image[0]}
                            class="w-full object-contain"
                          />
                        </div>

                        <div class="w-full">
                          <h3 class="text-sm max-w-[200px]  text-gray-800 font-bold truncate">
                            {item.product.name}
                          </h3>
                          <ul class="text-xs text-gray-800 space-y-1 mt-2">
                            <li class="flex flex-wrap gap-4">
                              Size{" "}
                              <span class="ml-auto">{item.product.size}</span>
                            </li>
                            <li class="flex flex-wrap gap-4">
                              Quantity{" "}
                              <span class="ml-auto">{item.quantity}</span>
                            </li>
                            <li class="flex flex-wrap gap-4">
                              Total Price{" "}
                              <span class="ml-auto">
                                ${item.quantity * item.product.price}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div class="lg:absolute lg:left-0 lg:bottom-0 bg-gray-200 w-full p-4">
                  <h4 class="flex flex-wrap gap-4 text-sm text-gray-800 font-bold">
                    Total{" "}
                    <span class="ml-auto">
                      ${data?.data?.totalPrice}
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
