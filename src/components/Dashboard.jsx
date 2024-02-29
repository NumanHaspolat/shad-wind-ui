import React, { useState } from "react";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory";
import Combobox from "../components/Combobox";
import { FiCreditCard } from "react-icons/fi";
import DatePickerComp from "./DatePickerComp";
import { CiWavePulse1 } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import { FiUsers } from "react-icons/fi";

const Dashboard = () => {
  const data = [
    { quarter: 1, earnings: Math.random() * 100000 },
    { quarter: 2, earnings: Math.random() * 100000 },
    { quarter: 3, earnings: Math.random() * 100000 },
    { quarter: 4, earnings: Math.random() * 100000 },
    { quarter: 5, earnings: Math.random() * 100000 },
    { quarter: 6, earnings: Math.random() * 100000 },
    { quarter: 7, earnings: Math.random() * 100000 },
    { quarter: 8, earnings: Math.random() * 100000 },
    { quarter: 9, earnings: Math.random() * 100000 },
    { quarter: 10, earnings: Math.random() * 100000 },
    { quarter: 11, earnings: Math.random() * 100000 },
    { quarter: 12, earnings: Math.random() * 100000 },
  ];

  const barStyle = {
    data: {
      fill: "white",
      cornerRadius: ({ datum }) => (datum.x % 2 === 0 ? 10 : 0),
    },
  };
  const rolesWithImages = {
    "Numan H.":
      "https://lh3.googleusercontent.com/ogw/ANLem4YiHWmAg9T4nJd-ElBIEanXpM-yC29DxFUf6aFmaw=s32-c-mo",
    "Kiara Rich":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5ySlny8A7liGYf6-okGa1YtuQZCVMF8DGi4_1M3C5aLUW_SOV0-aK5k959L-NsIkOXg&usqp=CAU",
    "Zac Hale":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcP-8QzSRw3LqErsv2ftQn6ZtBduQBTM8aKA&usqp=CAU",
  };

  const [selectedRole, setSelectedRole] = useState("Numan H.");
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="dashboard-div">
      <div className="dash-nav">
        <div className="flex items-center gap-3">
          <div className="dash-acc-items flex items-center gap-3">
            <img
              className="avatar-2"
              src={rolesWithImages[selectedRole]}
              alt=""
            />
            <Combobox
              noBorder={true}
              roles={Object.keys(rolesWithImages)}
              defaultValue={"Numan H."}
              onRoleSelect={handleRoleSelect}
            />
          </div>

          <div className="dash-nav-button">
            <button className="button-borderless transition-2 fs-1 color-light">
              Overview
            </button>
            <button className="button-borderless transition-2 fs-1">
              Customers
            </button>
            <button className="button-borderless transition-2 fs-1">
              Products
            </button>
            <button className="button-borderless transition-2 fs-1 ">
              Settings
            </button>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <input
            type="text"
            className="input-outlined input-outlined-own p-input b-radius-4 transition-1"
            placeholder="Search..."
          />
          <img
            className="avatar-2"
            src={rolesWithImages[selectedRole]}
            alt=""
          />
        </div>
      </div>
      <div className="dashboard-main">
        <div className="dash-main-nav">
          <h2 className="head-1">Dashboard</h2>
          <DatePickerComp
            noBorder={true}
            text={"Download"}
            dontShowDesc={true}
            gap={20}
          />
        </div>
        <div className="bottom-dash-nav">
          <button className="button-filled transition-2 fs-1">Overview</button>
          <button className="button-borderless transition-2 fs-1 ">
            Customers
          </button>
          <button className="button-borderless transition-2 fs-1 ">
            Products
          </button>
          <button className="button-borderless transition-2 fs-1 ">
            Settings
          </button>
        </div>
        <div className="salary-overview">
          <div className="salary-item">
            <div className="salary-item-left">
              <p className="salary-head">Total Revenue</p>
              <h2>$45,231.89</h2>
              <p className="par-6">+20.1% from last month</p>
            </div>
            <div className="salary-item-right">
              <MdAttachMoney color="#95959D" fontSize={19} />
            </div>
          </div>
          <div className="salary-item">
            <div className="salary-item-left">
              <p className="salary-head">Subscriptions</p>
              <h2>+2350</h2>
              <p className="par-3">+180.1% from last month</p>
            </div>
            <div className="salary-item-right">
              <FiUsers color="#95959D" fontSize={16} />
            </div>
          </div>
          <div className="salary-item">
            <div className="salary-item-left">
              <p className="salary-head">Sales</p>
              <h2>+12,234</h2>
              <p className="par-3">+19% from last month</p>
            </div>
            <div className="salary-item-right">
              <FiCreditCard color="#95959D" fontSize={15} />
            </div>
          </div>
          <div className="salary-item">
            <div className="salary-item-left">
              <p className="salary-head">Active Now</p>
              <h2>+573</h2>
              <p className="par-3">+201 since last hour</p>
            </div>
            <div className="salary-item-right">
              <CiWavePulse1 color="#95959D" fontSize={21} />
            </div>
          </div>
        </div>
        <div className="dash-main-content">
          <div
            className="victory-chart"
            style={{
              width: "650px",
            }}
          >
            <p className="left-top">Overview</p>
            <VictoryChart
              domainPadding={{ x: 10 }}
              padding={{ top: 45, left: 50, bottom: 30, right: 30 }}
            >
              <VictoryAxis
                tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                tickFormat={[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ]}
                style={{
                  axis: { stroke: "#09090B" },
                  ticks: { stroke: "#09090B" },
                  tickLabels: {
                    fill: "#6A6A6B",
                    fontSize: 9,
                    padding: 5,
                    angle: 0,
                  },
                }}
              />
              <VictoryAxis
                dependentAxis
                tickFormat={(x) => `$${x / 1000}k`}
                style={{
                  axis: { stroke: "#09090B" },
                  ticks: { stroke: "#09090B" },
                  tickLabels: {
                    fill: "#6A6A6B",
                    fontSize: 9,
                    textAnchor: "end",
                    verticalAnchor: "middle",
                  },
                }}
              />
              <VictoryBar
                data={data}
                x="quarter"
                y="earnings"
                style={barStyle}
                barWidth={22}
                animate={{
                  duration: 500,
                  onLoad: { duration: 500 },
                }}
              />
            </VictoryChart>
          </div>
          <div className="recent-sales">
            <div className="sales-head border-bot-3">
              <p>Recent Sales</p>
              <p className="par-3">You made 265 sales this month.</p>
            </div>
            <div className="sales-users">
              <div className="sales-user">
                <div className="sales-user-left">
                  <img
                    className="avatar"
                    src="https://ui.shadcn.com/avatars/01.png"
                    alt=""
                  />
                  <div className="sales-user-info">
                    <p>Olivia Martin</p>
                    <p className="par-6">olivia.martin@email.com</p>
                  </div>
                </div>
                <p className="salary-user">+$1,999.00</p>
              </div>
              <div className="sales-user">
                <div className="sales-user-left">
                  <img
                    className="avatar"
                    src="https://ui.shadcn.com/avatars/02.png"
                    alt=""
                  />
                  <div className="sales-user-info">
                    <p>Jackson Lee</p>
                    <p className="par-6">jackson.lee@email.com</p>
                  </div>
                </div>
                <p className="salary-user">+$39.00</p>
              </div>
              <div className="sales-user">
                <div className="sales-user-left">
                  <img
                    className="avatar"
                    src="https://ui.shadcn.com/avatars/03.png"
                    alt=""
                  />
                  <div className="sales-user-info">
                    <p>Isabella Nguyen</p>
                    <p className="par-6">isabella.nguyen@email.com</p>
                  </div>
                </div>
                <p className="salary-user">+$299.00</p>
              </div>
              <div className="sales-user">
                <div className="sales-user-left">
                  <img
                    className="avatar"
                    src="https://ui.shadcn.com/avatars/04.png"
                    alt=""
                  />
                  <div className="sales-user-info">
                    <p>William Kim</p>
                    <p className="par-6">will@email.com</p>
                  </div>
                </div>
                <p className="salary-user">+$99.00</p>
              </div>
              <div className="sales-user">
                <div className="sales-user-left">
                  <img
                    className="avatar"
                    src="https://ui.shadcn.com/avatars/05.png"
                    alt=""
                  />
                  <div className="sales-user-info">
                    <p>Sofia Davis</p>
                    <p className="par-6">sofia.davis@email.com</p>
                  </div>
                </div>
                <p className="salary-user">+$39.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
