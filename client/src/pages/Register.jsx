import React from "react";

function Register() {
  return (
    <div>
      <section
        class="relative mt-20 md:py-24 py-16 bg-[url('/girl_laptop.avif')] bg-no-repeat bg-fixed bg-top bg-cover"
        id="table"
      >
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="container relative">
          <div class="grid lg:grid-cols-12 md:grid-cols-2 items-center gap-[30px]">
            <div class="lg:col-span-7 text-left">
              <h4 class="font-semibold lg:leading-normal leading-normal text-3xl lg:text-4xl mb-5 text-white">
                Register Now !
              </h4>
              <p class="text-white/70 text-lg max-w-xl">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered Tailwind CSS v3.x html page.
              </p>
              <div class="relative mt-10">
                <a
                  class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                  href="/index-course"
                >
                  Admission Now
                </a>
              </div>
            </div>
            <div class="lg:col-span-5">
              <div class="bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-800 md:p-8 p-6 lg:ms-10 z-10 relative">
                <h4 class="mb-5 text-2xl font-semibold">Register Now</h4>
                <form>
                  <div class="grid grid-cols-1">
                    <div class="mb-5">
                      <label class="form-label font-medium">
                        Your Name : <span class="text-red-600">*</span>
                      </label>
                      <div class="form-icon relative mt-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="w-4 h-4 absolute top-3 start-4"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <input
                          type="text"
                          class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Name"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="mb-5">
                      <label class="form-label font-medium">
                        Your Email : <span class="text-red-600">*</span>
                      </label>
                      <div class="form-icon relative mt-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="w-4 h-4 absolute top-3 start-4"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <input
                          type="email"
                          class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Email"
                          name="email"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="mb-5">
                      <label class="form-label font-medium">
                        Phone No. : <span class="text-red-600">*</span>
                      </label>
                      <div class="form-icon relative mt-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="w-4 h-4 absolute top-3 start-4"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <input
                          name="number"
                          id="phNumber"
                          class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="+12 12458 854"
                          required=""
                        />
                      </div>
                    </div>
                    <div>
                      <a
                        class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                        href="/index-course"
                      >
                        Free Trial
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
