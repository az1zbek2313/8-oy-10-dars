import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import "./example.scss";
import icon1 from "../assets/arrow-right.svg";
import icon2 from "../assets/left.svg";
import icon from "../assets/add-square.svg";
import { MenuItem, Select } from "@mui/material";
import { NavLink } from "react-router-dom";

function Exaple() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between title">
        <h1 className="flex align-center gap-2 textTitle">
          <img src={`${icon2}`} alt="icon2" /> Yangi loyiha ochish
        </h1>
        <button className="flex px-4 py-2 bg-blue-600 text-white rounded-lg">
          Davom etish <img width={24} src={`${icon1}`} alt="icon1" />
        </button>
      </div>

      <div className="timeline">
        <Timeline position="right">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              09:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Code</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              12:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Sleep</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              9:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Repeat</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>

      <div className="messageView">
        <div className="messageView__text">
          <h1>Habarning ko’rinishi</h1>

          <div className="shablon flex flex-col">
            <label htmlFor="shablon">Shablon</label>
            <Select id="shablon" sx={{ bgcolor: "white" }} className="select">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <div className="flex gap-2 justify-end mr-2 mt-2 cursor-pointer ShablonSaved">
              <img className="shablonSave" src={icon} alt="" />
              <p className="shablonSave">Shablon holatida saqlash</p>
            </div>
          </div>

          <div className="habar">
            <h1>Habar</h1>
            <ul className="flex justify-between">
              <li
                className={`bg-white text-blue-600 border border-gray transition-all hover:bg-gray-200`}
              >
                <a>O’zbekcha</a>
              </li>
              <li
                className={`bg-gray text-gray-400 transition-all hover:bg-gray-200`}
              >
                <a>Русский</a>
              </li>
              <li
                className={`bg- text-gray-400 transition-all hover:bg-gray-200`}
              >
                <a>English</a>
              </li>
            </ul>
            <textarea
              placeholder="Habar matni..."
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="messageView__background">
          <div>
            <a
              href="#"
              className="linkMessage block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <p className="font-normal text-gray-700 dark:text-gray-400">
                E-POLIS SOTIB OLINDI. <br />
                "Imkon-sug'urta" MCHJ SK. 56000 so'm; <br />
                Muddati:17.01.2022-16.01.2023 <br />
                EISL00000004
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exaple;
