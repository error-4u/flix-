import React from "react";

function Slider() {
  return (
    <div>
      <div class="container relative">
        <div class="grid grid-cols-1 relative">
          <div class="tiny-five-item">
            <div class="tns-outer" id="tns1-ow">
              <div
                class="tns-controls"
                aria-label="Carousel Navigation"
                tabindex="0"
              >
                <button
                  type="button"
                  data-controls="prev"
                  tabindex="-1"
                  aria-controls="tns1"
                >
                  <i class="mdi mdi-chevron-left "></i>
                </button>
                <button
                  type="button"
                  data-controls="next"
                  tabindex="-1"
                  aria-controls="tns1"
                >
                  <i class="mdi mdi-chevron-right"></i>
                </button>
              </div>
              <div
                class="tns-liveregion tns-visually-hidden"
                aria-live="polite"
                aria-atomic="true"
              >
                slide <span class="current">4</span> of 6
              </div>
              <div id="tns1-mw" class="tns-ovh">
                <div class="tns-inner" id="tns1-iw">
                  <div
                    class="  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                    id="tns1"
                    style="transform: translate3d(-50%, 0px, 0px);"
                  >
                    <div
                      class="tiny-slide tns-item"
                      id="tns1-item0"
                      aria-hidden="true"
                      tabindex="-1"
                    >
                      <div class="px-3 py-10 rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-slate-900 hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2">
                        <div class="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 1024 1024"
                            class="w-7 h-7"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M913.9 552.2L805 181.4v-.1c-7.6-22.9-25.7-36.5-48.3-36.5-23.4 0-42.5 13.5-49.7 35.2l-71.4 213H388.8l-71.4-213c-7.2-21.7-26.3-35.2-49.7-35.2-23.1 0-42.5 14.8-48.4 36.6L110.5 552.2c-4.4 14.7 1.2 31.4 13.5 40.7l368.5 276.4c2.6 3.6 6.2 6.3 10.4 7.8l8.6 6.4 8.5-6.4c4.9-1.7 9-4.7 11.9-8.9l368.4-275.4c12.4-9.2 18-25.9 13.6-40.6zM751.7 193.4c1-1.8 2.9-1.9 3.5-1.9 1.1 0 2.5.3 3.4 3L818 394.3H684.5l67.2-200.9zm-487.4 1c.9-2.6 2.3-2.9 3.4-2.9 2.7 0 2.9.1 3.4 1.7l67.3 201.2H206.5l57.8-200zM158.8 558.7l28.2-97.3 202.4 270.2-230.6-172.9zm73.9-116.4h122.1l90.8 284.3-212.9-284.3zM512.9 776L405.7 442.3H620L512.9 776zm157.9-333.7h119.5L580 723.1l90.8-280.8zm-40.7 293.9l207.3-276.7 29.5 99.2-236.8 177.5z"></path>
                          </svg>
                        </div>
                        <div class="content mt-6">
                          <a
                            class="title h5 text-lg font-medium hover:text-indigo-600"
                            href="/index-course"
                          >
                            UI / UX Design
                          </a>
                          <p class="text-slate-400 mt-3">35 Lesson</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tiny-slide tns-item"
                      id="tns1-item1"
                      aria-hidden="true"
                      tabindex="-1"
                    >
                      <div class="px-3 py-10 rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-slate-900 hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2">
                        <div class="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            class="w-7 h-7"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64ZM160,88h40a8,8,0,0,1,0,16H160a8,8,0,0,1,0-16Zm48,40a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,128Zm0,32a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,160Z"></path>
                          </svg>
                        </div>
                        <div class="content mt-6">
                          <a
                            class="title h5 text-lg font-medium hover:text-indigo-600"
                            href="/index-course"
                          >
                            Web Development
                          </a>
                          <p class="text-slate-400 mt-3">20 Lesson</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tiny-slide tns-item"
                      id="tns1-item2"
                      aria-hidden="true"
                      tabindex="-1"
                    >
                      <div class="px-3 py-10 rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-slate-900 hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2">
                        <div class="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class="w-7 h-7"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                            ></path>
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                            ></path>
                          </svg>
                        </div>
                        <div class="content mt-6">
                          <a
                            class="title h5 text-lg font-medium hover:text-indigo-600"
                            href="/index-course"
                          >
                            Graphic Design
                          </a>
                          <p class="text-slate-400 mt-3">35 Lesson</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tiny-slide tns-item tns-slide-active"
                      id="tns1-item3"
                    >
                      <div class="px-3 py-10 rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-slate-900 hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2">
                        <div class="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 16 16"
                            class="w-7 h-7"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M4.5 1L4 1.5V3.02746C4.16417 3.00932 4.331 3 4.5 3C4.669 3 4.83583 3.00932 5 3.02746V2H14V7H12.2929L11 8.29289V7H8.97254C8.99068 7.16417 9 7.331 9 7.5C9 7.669 8.99068 7.83583 8.97254 8H10V9.5L10.8536 9.85355L12.7071 8H14.5L15 7.5V1.5L14.5 1H4.5Z"></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.41705 10.4288C7.37039 9.80348 8 8.72527 8 7.5C8 5.567 6.433 4 4.5 4C2.567 4 1 5.567 1 7.5C1 8.72527 1.62961 9.80348 2.58295 10.4288C2.11364 10.6498 1.68557 10.9505 1.31802 11.318C0.900156 11.7359 0.568688 12.232 0.342542 12.7779C0.180451 13.1692 0.0747425 13.5807 0.0278638 14C0.00933826 14.1657 0 14.3326 0 14.5V15H1L0.999398 14.5C0.999398 14.4784 0.999599 14.4567 1 14.4351C1.00811 13.9975 1.09823 13.5651 1.26587 13.1604C1.44179 12.7357 1.69964 12.3498 2.0247 12.0247C2.34976 11.6996 2.73566 11.4418 3.16038 11.2659C3.57088 11.0958 4.00986 11.0056 4.45387 10.9997C4.46922 10.9999 4.4846 11 4.5 11C4.5154 11 4.53078 10.9999 4.54613 10.9997C4.99014 11.0056 5.42912 11.0958 5.83962 11.2659C6.26433 11.4418 6.65024 11.6996 6.9753 12.0247C7.30036 12.3498 7.55821 12.7357 7.73413 13.1604C7.90177 13.5651 7.99189 13.9975 8 14.4351C8.0004 14.4567 8.0006 14.4784 8.0006 14.5L8 15H9V14.5C9 14.3326 8.99066 14.1657 8.97214 14C8.92526 13.5807 8.81955 13.1692 8.65746 12.7779C8.43131 12.232 8.09984 11.7359 7.68198 11.318C7.31443 10.9505 6.88636 10.6498 6.41705 10.4288ZM4.5 10C3.11929 10 2 8.88071 2 7.5C2 6.11929 3.11929 5 4.5 5C5.88071 5 7 6.11929 7 7.5C7 8.88071 5.88071 10 4.5 10Z"
                            ></path>
                          </svg>
                        </div>
                        <div class="content mt-6">
                          <a
                            class="title h5 text-lg font-medium hover:text-indigo-600"
                            href="/index-course"
                          >
                            PHP Development
                          </a>
                          <p class="text-slate-400 mt-3">46 Lesson</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tiny-slide tns-item"
                      id="tns1-item4"
                      aria-hidden="true"
                      tabindex="-1"
                    >
                      <div class="px-3 py-10 rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-slate-900 hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2">
                        <div class="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            class="w-7 h-7"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 4C8 5.10457 7.10457 6 6 6 4.89543 6 4 5.10457 4 4 4 2.89543 4.89543 2 6 2 7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7 6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057 12.7931 7.79289 14.2073 9.20711 10.5201 12.8943 9 11.4587V22H7V16H5ZM10 5H19V14H10V16H14.3654L17.1889 22H19.3993L16.5758 16H20C20.5523 16 21 15.5523 21 15V4C21 3.44772 20.5523 3 20 3H10V5Z"></path>
                          </svg>
                        </div>
                        <div class="content mt-6">
                          <a
                            class="title h5 text-lg font-medium hover:text-indigo-600"
                            href="/index-course"
                          >
                            Data Science
                          </a>
                          <p class="text-slate-400 mt-3">60 Lesson</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tiny-slide tns-item"
                      id="tns1-item5"
                      aria-hidden="true"
                      tabindex="-1"
                    >
                      <div class="px-3 py-10 rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-slate-900 hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2">
                        <div class="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 1024 1024"
                            class="w-7 h-7"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0 0 58.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0 0 12.1-46.5c24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0 0 24.4 59.8 73.36 73.36 0 0 0 53.4 18.8c19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z"></path>
                          </svg>
                        </div>
                        <div class="content mt-6">
                          <a
                            class="title h5 text-lg font-medium hover:text-indigo-600"
                            href="/index-course"
                          >
                            Digital Marketing
                          </a>
                          <p class="text-slate-400 mt-3">05 Lesson</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
          <div class="md:col-span-12 text-center">
            <a
              class="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
              href="/index-course"
            >
              All Categories{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
