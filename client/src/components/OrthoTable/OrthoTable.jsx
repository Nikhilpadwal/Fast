import React from "react";
import "./OrthoTable.scss";

const orthoData = [
  {
    id: 1,
    toxicant: "ALPHAMETHRIN 5%&10%",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "6-8%",
    // dosage: 3-6,
  },
  {
    id: 2,
    toxicant: "ANILOFOS 18% & 30% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "8%",
  },
  {
    id: 3,
    toxicant: "ABAMECTIN 1.8%,1.9%& 3.6% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "8%",
  },
  {
    id: 4,
    toxicant: "AMITRAZ 12.5%&20% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "8%",
  },
  {
    id: 5,
    toxicant: "CYPERMETHRIN10%&25% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "6-8%",
  },
  {
    id: 6,
    toxicant: "CHLOROPYRIPHOS 20,48&50%EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "6-8%",
  },
  {
    id: 7,
    toxicant: "DELTAMETHRIN 2.8% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "6-8%",
  },
  {
    id: 8,
    toxicant: "DIAZINON 20% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "7-8%",
  },
  {
    id: 9,
    toxicant: "FENITROTHION 50% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "8-10%",
  },
  {
    id: 10,
    toxicant: "FENPYROXIMATE5% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "6-8%",
  },
  {
    id: 11,
    toxicant: "FENVALEARATE 20% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "6-8%",
  },
  {
    id: 12,
    toxicant: "LAMBDACYHALOTHRIN 2.5,5% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "6-8%",
  },
  {
    id: 13,
    toxicant: "PERMETHRIN 25% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "6-7%",
  },
  {
    id: 14,
    toxicant: "QUINALPHOS 25% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "6-8%",
  },
  {
    id: 15,
    toxicant: "TRICONTANOL 0.05% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "6%",
  },
  {
    id: 16,
    toxicant: "PENDIMETHALIN 30% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "5%",
  },
  {
    id: 17,
    toxicant: "PRETLACHLOR 50% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "8-10%",
  },
  {
    id: 18,
    toxicant: "BUTACHLOR 50% EC",
    solvent: "c-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "",
  },
  {
    id: 19,
    toxicant: "BPMC 50% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "5-6%",
  },
  {
    id: 20,
    toxicant: "CPP50%+CYPER5%",
    solvent: "KEROSENE",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "",
  },
  {
    id: 21,
    toxicant: "ETHION 50% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "",
  },
  {
    id: 23,
    toxicant: "METHYLPARATHION 50% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "",
  },
  {
    id: 24,
    toxicant: "TEMEPHOS 50 %EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "",
  },
  {
    id: 25,
    toxicant: "PROFENO40%+CYPER 4% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "",
  },
  {
    id: 26,
    toxicant: "PROFENOFOS 50% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "",
  },
  {
    id: 28,
    toxicant: "LAMBDACYHALOTHRIN 2.5,5% EC",
    solvent: "C-9",
    emulsifierPair: "FX 6600 /FX 7700",
    dosage: "",
  },
];

const data = [
  ["Cylinder No.", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  ["'5% A' vol (cc)", "-", 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0],
  ["'5% B' vol (cc)", 5.0, 4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.5, "-"],
  ["Total Vol (cc)", 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0],
  [
    "Ratio A/B",
    "0/100",
    "10/90",
    "20/80",
    "30/70",
    "40/60",
    "50/50",
    "60/40",
    "70/30",
    "80/20",
    "90/10",
    "100/0",
  ],
];
//done
const OrthoTable = () => {
  return (
    <div className="ortho-table-container mt-5">
      <h2 className="text-center headings">
        Screening & Selection of Perfect Emulsifiers
      </h2>
      <h5 className="para mt-2">
        Screening & selection of perfect emulsifiers Screening of emulsifiers:
      </h5>
      <p>
        Screening of emulsifiers by one of the leading agro surfactant
        manufacturers in India: A set of matching pairs of anionic and non-ionic
        emulsifiers are chosen through a series of steps to establish the
        appropriate ratio.
      </p>
      <ul className="mt-2">
        <li>
          A set of two blank solutions (EC without emulsifier) are prepared
          leaving a gap of the desired dosage of emulsifier.
        </li>
        <li>
          The desired dosage of anionic & non-ionic emulsifiers to be added in
          blanks prepared separately. The blank solutions to be marked as "A" &
          "B". Both the blanks ("A" & "B") to be stirred vigorously to ensure
          proper mixing.
        </li>
        <li>
          Volumetrically blend to be done (as per row 3 in above table). The
          chart has been made for 5% dosage of emulsifiers to be tested on 1
          specific toxicant{" "}
        </li>
        <li>Different ratios to be tested as per row 4 in above table. </li>
      </ul>
      <p className="mb-2">
        {" "}
        EC samples to be tested in 11 stoppered glass cylinders for emulsion as
        per the below chart:
      </p>

      <div className="pb-4" style={{ overflow: "scroll" }}>
        <table className="w-full border-collapse border border-gray-400 ">
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border p-2 text-center font-bold"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ overflow: "scroll" }}>
        <table className="ortho-table" style={{ overflow: "scroll" }}>
          <thead>
            <tr>
              <th>S.NO.</th>
              <th>TOXICANT</th>
              <th>SOLVENT</th>
              <th>Emulsifier Pair</th>
              <th>DOSAGE</th>
            </tr>
          </thead>
          <tbody>
            {orthoData.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.toxicant}</td>
                <td>{row.solvent}</td>
                <td>{row.emulsifierPair}</td>
                <td>{row.dosage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="pt-4">
        Selection of Emulsifiers the best chosen cylinder is to belefton
        stability for determination of creaming & sedimentation.
      </p>
      <p>
        The EC loptimum chosen cylinder is to betest for accelerate heat
        stability.
      </p>
    </div>
  );
};

export default OrthoTable;
