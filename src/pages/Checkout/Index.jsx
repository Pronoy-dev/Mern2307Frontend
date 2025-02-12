import React, { useState } from "react";
import {
  useGetuserCartItemQuery,
  usePlaceOrderMutation,
} from "../../Features/Api/exclusiveApi";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  const { data, isLoading, isError } = useGetuserCartItemQuery();
  const [placeOrder, { isLoading: orderLoading }] = usePlaceOrderMutation();
  const userbioData = JSON.parse(localStorage.getItem("userinfo"));

  const [userInput, setuserInput] = useState([
    {
      name: "firstName",
    },
    {
      name: "lastName",
    },
    {
      name: "email",
    },
    {
      name: "phone",
    },
    {
      name: "address1",
    },
    {
      name: "address2",
    },
    {
      name: "city",
    },
    {
      name: "district",
    },
    { name: "postcode" },
  ]);
  const [uservalue, setuservalue] = useState({
    firstName: userbioData?.firstName,
    lastName: "Doe",
    email: userbioData?.email,
    phone: userbioData?.phoneNumber,
    address1: "123 Main St",
    address2: "Apt 4B",
    city: "Dhaka",
    district: "Dhaka",
    postcode: 1212,
    paymentmethod: "",
  });

  // handleChange funtion
  const handleChange = (event) => {
    const { name, value } = event.target;
    setuservalue({
      ...uservalue,
      [name]: value,
    });
  };
  const onSubmit = async (data) => {
    try {
      const orderData = {
        customerinfo: {
          firstName: uservalue.firstName,
          lastName: uservalue.lastName,
          email: uservalue.email,
          phone: parseInt(uservalue.phone),
          address1: uservalue.address1,
          address2: uservalue.address2,
          city: uservalue.city,
          district: uservalue.district,
          postcode: uservalue.postcode || 1212,
        },
        paymentinfo: {
          paymentmethod: uservalue.paymentmethod,
          ispaid: false,
        },
      };
      const response = await placeOrder(orderData).unwrap();
      if (response.url) {
        window.location.href = response.url;
      }
    } catch (error) {
      console.error("error from place order", error);
    } finally {
      // resetField();
    }
  };

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

              <form class="lg:mt-16" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <h2 class="text-xl font-bold text-gray-800">
                    Customer Details
                  </h2>

                  <div class="grid sm:grid-cols-2 gap-8 mt-8">
                    {userInput?.map(({ name }) => {
                      return (
                        <div>
                          <input
                            type={
                              name == "postcode"
                                ? "number"
                                : name == "phone"
                                ? "number"
                                : name == "email"
                                ? "email"
                                : "text"
                            }
                            placeholder={`Enter Your ${name}`}
                            defaultValue={uservalue[name]}
                            {...register(name, {
                              required: name === "postcode" ? false : true,
                              pattern:
                                name === "email"
                                  ? /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                                  : undefined, // Email pattern
                            })}
                            onChange={handleChange}
                            onFocus={(e) =>
                              e.target.name == "firstName" ||
                              e.target.name == "email" ||
                              e.target.name == "phone"
                                ? e.target.value
                                : (e.target.value = "")
                            }
                            class="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                          />
                          {errors[name] && (
                            <span className="text-red-500 mt-2">
                              This {name} is required *
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div class="mt-16">
                  <h2 class="text-xl font-bold text-gray-800">
                    Payment method
                  </h2>

                  <div class="grid gap-4 sm:grid-cols-2 mt-4">
                    <div
                      class="flex items-center"
                      onClick={() =>
                        setuservalue({ ...uservalue, paymentmethod: "online" })
                      }
                    >
                      {uservalue.paymentmethod == "online" ? (
                        <label for="card" class=" flex gap-2 cursor-pointer">
                          <img
                            src="https://readymadeui.com/images/american-express.webp"
                            class="w-32 h-16"
                            alt="card2"
                          />
                        </label>
                      ) : (
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
                      )}
                    </div>

                    <div class="flex items-center">
                      <button
                        onClick={() =>
                          setuservalue({
                            ...uservalue,
                            paymentmethod: "cash",
                          })
                        }
                        type="button"
                        className={
                          uservalue.paymentmethod == "cash"
                            ? "px-5 py-3 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-green-700 hover:bg-green-800 active:bg-orange-700"
                            : "px-5 py-3 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-orange-700 hover:bg-orange-800 active:bg-orange-700"
                        }
                      >
                        Cash On Delivery
                      </button>
                    </div>
                  </div>
                </div>

                <div class="flex flex-wrap gap-4 mt-8">
                  <Link
                    to={"/addtocart"}
                    className="flex items-center justify-center min-w-[150px] px-6 py-3.5 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                  >
                    Back
                  </Link>
                  <button
                    type="submit"
                    class="min-w-[150px] px-6 py-3.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    {orderLoading ? "loading .." : "Confirm payment"}
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
                    Total <span class="ml-auto">${data?.data?.totalPrice}</span>
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
