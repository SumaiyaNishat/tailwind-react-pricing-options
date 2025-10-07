import React from "react";
import {LineChart, Line, XAxis, YAxis } from "recharts";

const resultData = [
  {
    "id": 1,
    "name": "Aarav Khan",
    "physics": 85,
    "chemistry": 78,
    "math": 90
  },
  {
    "id": 2,
    "name": "Maya Rahman",
    "physics": 92,
    "chemistry": 88,
    "math": 95
  },
  {
    "id": 3,
    "name": "Rafiul Hasan",
    "physics": 76,
    "chemistry": 81,
    "math": 74
  },
  {
    "id": 4,
    "name": "Nusrat Jahan",
    "physics": 89,
    "chemistry": 93,
    "math": 87
  },
  {
    "id": 5,
    "name": "Imran Hossain",
    "physics": 64,
    "chemistry": 70,
    "math": 68
  },
  {
    "id": 6,
    "name": "Tania Akter",
    "physics": 91,
    "chemistry": 84,
    "math": 89
  },
  {
    "id": 7,
    "name": "Samiul Karim",
    "physics": 73,
    "chemistry": 65,
    "math": 78
  },
  {
    "id": 8,
    "name": "Lamia Chowdhury",
    "physics": 88,
    "chemistry": 90,
    "math": 85
  },
  {
    "id": 9,
    "name": "Adnan Kabir",
    "physics": 95,
    "chemistry": 92,
    "math": 98
  },
  {
    "id": 10,
    "name": "Farhana Islam",
    "physics": 80,
    "chemistry": 75,
    "math": 82
  }
]


const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};
export default ResultsChart;