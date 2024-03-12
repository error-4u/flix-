import React from "react";
import Slider from "./Slider2";

function BrowseCourse() {
  return (
    <div className="relative border border-black">
      <div className="container relative border border-red">
        <div className="grid grid-cols-2 md:grid-cols-12 border">
          <div className="lg:col-span-9 md:col-span-8 sm:col-span-5 md:text-start text-center">
            <h3 className=" mb-5 md:text-start text-center">
              Browse Online Courses
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis in
              tempore illum nostrum et consequuntur, recusandae dicta culpa
            </p>
          </div>
          <div class="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
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
                class="ms-2 text-[10px]"
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

export default BrowseCourse;
