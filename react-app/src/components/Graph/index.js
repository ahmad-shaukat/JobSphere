import { Bar } from "react-chartjs-2";
import "./app.css";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllInterviewsThunk } from "../../store/interview";
// import { Data } from "../testGraph/utilites/data";

export const BarChart = ({ chartData }) => {
  const dispatch = useDispatch()
  const [showDeclined, setShowDeclined] = useState(false);
  const [showScheduled, setShowScheduled] = useState(false);
  const [showOffered, setShowOffered] = useState(false);
  const currentYear = new Date().getFullYear()
  useEffect( () =>dispatch(getAllInterviewsThunk()), [dispatch] )
  

  const handleShowDeclined = () => {
    setShowDeclined(true);
    setShowOffered(false);
    setShowScheduled(false);
  };
  const handleShowScheduled = () => {
    setShowDeclined(false);
    setShowOffered(false);
    setShowScheduled(true);
  };
  const handleShowOffered = () => {
    setShowDeclined(false);
    setShowOffered(true);
    setShowScheduled(false);
  };

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Interview Data for {currentYear}</h2>

      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: "",
            },

            legend: {
              display: true,
            },
            respnsive: true,
          },
          aspectRatio: 1.4,
          responsive: true,
          
        }}
      />
    </div>
  );
};
