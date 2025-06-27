import React from "react";
import "./TechnicalDataSheet.scss";
import makkhi from "../../assets/images/techdata/a.jpeg";
import couplesfly from "../../assets/images/ortho/fly.jpg";
import formula from "../../assets/images/ortho/formula.jpg";
import makkhi2 from "../../assets/images/techdata/b (1).jpeg";
import chem1 from "../../assets/images/techdata/B1 (2).jpeg";
import chem3 from "../../assets/images/techdata/B1 (1).jpeg";



const TechnicalDataSheet = () => {
  const pdfData = [
    {
      title: "Cue Lure",
      image: makkhi,
      tableimg: chem1,
      introduction:
        "Fenton Chemicals is the leading manufacturer of Speciality Chemicals, Emulsifiers, Silicon Spreaders and Pheromones all over the globe. Fenton Chemicals is manufacturing Cuelure of the highest quality with purity more than 97% for every batch.",
      description:
        "The Cuelure is a synthetic product related with the sexual pheromone produced by diptera of the Bactrocera genus, highly effective for the management of various fruit flies. It can be used for monitoring populations programs (monitoring) as well as management (mass capture). <br/>  <br/> Cuelure is chemically related to the sex pheromone produced by female melon flies to attract males for mating. Pheromones are volatile chemicals produced by a given species to change the behavior of other individuals of the same species. Cuelure will be initially used to attract male melon flies to prevent them from mating and producing the next fly generation. The name cuelure is derived from the Latin name of the target melon fly, Bactrocera cucurbitae (Coquilette). Cuelure is a colorless to pale yellow liquid .It volatilizes slowly. Tests show that cuelure attracts male melon flies more effectively than the unmodified se pheromone.",
      details: {
        chemicalName: "4-(-4-acetoxyphenyl)-butan-2-one",
        molecularWeight: "206 g/mol",
        appearance: "Clear Liquid",
        color: "Light Pale Yellow",
        refractiveIndex: "1.507",
        density: "1.099 g/ml",
        assay: "99.13%",
      },
      // table standaer data

      td1: "Clear Liquid",
      td2: "Light Pale Yellow",
      td3: "1.505 - 1.520",
      td4: "1.000 - 1.110 g/ml",
      td5: "Min 97%",

      //
      fruitheading: "Fruit Flies Attracted",
      fruitFlies: [
        "Bactrocera cucurbitae",
        "Bactrocera newmanii",
        "Bactrocera tryoni",
        "Bactrocera neohumeralis",
        "Bactrocera frauenfeldi",
        "Bactrocera nigrotibialis",
      ],
      //
      usageSites:
        "CUELURE is expected to be used initially in producing end products that attract and inactivate melon flies on such crops as Cucumber, Gherkin, Melons, Pumpkin, Bitter gourd, Coccinia (Little gourd), Snake gourd, Ridge gourd, Bottle gourd & other Cucurbitaceous crops and some fruits (Mango, Guava, Sapota, Citrus etc.)",
      monitoring: {
        luresPerKm2: "1",
        timing: "Throughout the year",
        replacement: "Once in 30 - 40 days",
        totalLuresPerKm2: "8 - 12/year",
      },
      control: {
        luresPerAcre: "6 - 10",
        timing: "From flowering to harvest",
        replacement: "Once in 30 - 40 days",
        totalLuresPerAcre: "12-20 or 18-30 depending on the crop",
      },
    },
    // 2 second sheeet data
    {
      title: "Methyl Eugenol",
      image: makkhi2,
      tableimg: chem3,

      introduction:
        "Fenton Chemicals is the leading manufacturer of Speciality Chemicals, Emulsifiers, Silicon Spreaders and Pheromones all over the globe. Fenton Chemicals is manufacturing Methyl Eugenol of the highest quality with purity more than 99% for every batch.",
      description:
        "Methyl Eugenol is a type of phenylpropanoid element which means the methyl ether of eugenol. It is produced by methylation of eugenol and has an alkyl group attached to its benzene ring. Methyl Eugenol is found in various essential oils. <br/> <br/> Its IUPAC name is 1,2-Dimethoxy-4(prop-2-en-1-yl) benzene. Other synonyms of Methyl Eugenol include:",

      details: {
        chemicalName: "4-(-4-acetoxyphenyl)-butan-2-one",
        molecularWeight: "206 g/mol",
        appearance: "Clear Liquid",
        color: "Light Pale Yellow",
        refractiveIndex: "1.507",
        density: "1.099 g/ml",
        assay: "99.13%",
      },
      // table standaer data

      td1: "Clear Oily Liquid",
      td2: "Colorless to pale yellow ",
      td3: "1.532 – 1.536 ",
      td4: "1.032 – 1.036 g/ml ",
      td5: "Min 97%",
      disList: [
        "Allylveratrol",
        "4-Allyl-1,2-dimethoxybenzene",
        "4-Allylveratrol",
        "Eugenol methyl ether",
      ],
      disListDiscription:
        "ethyl eugenol will be used in insect traps and lure products to attract certain fruit flies such as the Oriental fruit fly on affected food crops. Methyl eugenol (4-allyl-1,2-dimethoxybenzenecarboxylate) and cue-lure [4-(p-acetoxyphenyl)-2-butanone] are highly attractive kairomone lures to oriental fruit fly, Bactrocera dorsalis (Hendel), and melon fly, B. cucurbitae (Coquillett), respectively.",
      disimg: formula,
      fruitheading: "FRUIT FLIES ATTRACTED TO METHYL EUGENOL BLOCK",
      fruitFlies: [
        " Bactrocera dorsalis ",
        " Bactrocera zonata ",
        "Bactrocera correcta ",
        "Bactrocera papayae ",
        "Bactrocera musae ",
        "Bactrocera invadens ",
      ],
      usageSites:
        "Methyl Eugenol is expected to be used initially in producing end products that attract and inactivate melon flies on such crops as Mango, Guava, Papaya, Citrus & all fruit crops.",

      monitoring: {
        luresPerKm2: "1",
        timing: "Throughout the year",
        replacement: "Once in 30 - 40 days",
        totalLuresPerKm2: "8 - 12/year",
      },
      control: {
        luresPerAcre: "6 - 10",
        timing: "From flowering to harvest",
        replacement: "Once in 30 - 40 days",
        totalLuresPerAcre: "12-20 or 18-30 depending on the crop",
      },
    },
  ];

  return (
    <>
      <div className="pdf-container">
        <div className="sheethead">
          <div className="dbg"></div>
        </div>
        {pdfData.map((pdfData, key) => (
          <div className="containerdiv" key={key}>
            <h2 className="thead colorfor mt-0">
              {key + 1}. {pdfData.title}{" "}
            </h2>

            <div className="intro-part">
              <div className="img-round">
                <img src={pdfData.image} alt="" />
              </div>
              <div className="int-div">
                <h2 className="mb-2 int-head text-start fw-bolt">
                  Introduction
                </h2>
                <p className="techpara img-para">{pdfData.introduction}</p>
              </div>
            </div>

            <div className="dicription-bg  mt-5 ">
              <div className="blue-bg">
                <div className="white-bg">
                  <h2 className="thead">Description</h2>
                  <p
                    className="techpara img-para"
                    dangerouslySetInnerHTML={{ __html: pdfData.description }}
                  ></p>
                 <div className="diss d-flex gap-5 p-3 px-0">
                 <ul className="mt-1">
                    {pdfData?.disList?.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                  <img src={pdfData?.disimg} alt="" />
                 </div>
                  <p>{pdfData?.disListDiscription}</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="fruit-container">
              <h2 className="thead mt-0">{pdfData.fruitheading}</h2>
              <div className="fuitactract  ">
                <ul className="fruil-ul">
                  {pdfData.fruitFlies.map((fly, index) => (
                    <li key={index}>{fly}</li>
                  ))}
                </ul>
                <img className="shadow" src={pdfData.tableimg} alt="" />
              </div>
            </div>
            {/* technical detils */}
            <h2 className="thead">Technical Details</h2>
            <table>
              <thead>
                <tr>
                  <th>Test Parameters</th>
                  <th>Standards</th>
                  <th>Actual Results</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Appearance</td>
                  <td>{pdfData.td1}</td>
                  <td>{pdfData.details.appearance}</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>{pdfData.td2}</td>
                  <td>{pdfData.details.color}</td>
                </tr>
                <tr>
                  <td>Refractive Index</td>
                  <td>{pdfData.td3}</td>
                  <td>{pdfData.details.refractiveIndex}</td>
                </tr>
                <tr>
                  <td>Density (g/ml) at 20°C</td>
                  <td>{pdfData.td4}</td>
                  <td>{pdfData.details.density}</td>
                </tr>
                <tr>
                  <td>Assay (GC)</td>
                  <td>{pdfData.td5}</td>
                  <td>{pdfData.details.assay}</td>
                </tr>
              </tbody>
            </table>
            {/* use sites */}
            <div className="usediv shadow p-4  mt-5">
              <h2 className="thead mt-0">Use Sites</h2>
              <p className="usepara">{pdfData.usageSites}</p>
            </div>

            {/* for monitiing */}
            <div className="colulate-container mt-5">
              <div className="blue-bg">
                <div className="left-div">
                  <h2 className="thead m-0 mb-2">For Monitoring</h2>
                  <p className="techpara">
                    <strong>
                      No. of lures per KM<sup>2</sup>:
                    </strong>{" "}
                    {pdfData.monitoring.luresPerKm2}
                  </p>
                  <p className="techpara">
                    <strong>Timing:</strong> {pdfData.monitoring.timing}
                  </p>
                  <p className="techpara">
                    <strong>Replacement:</strong>{" "}
                    {pdfData.monitoring.replacement}
                  </p>
                  <p className="techpara">
                    <strong>
                      Total lures to be used per KM<sup>2</sup>:
                    </strong>{" "}
                    {pdfData.monitoring.totalLuresPerKm2}
                  </p>
                </div>
                {/* for area control */}
                <div className="right-div">
                  <h2 className="thead text-start mb-2  m-0">
                    For Area-wide Control
                  </h2>
                  <p>
                    <strong>No. of lures per Acre:</strong>{" "}
                    {pdfData.control.luresPerAcre}
                  </p>
                  <p className="techpara">
                    <strong>Timing:</strong> {pdfData.control.timing}
                  </p>
                  <p className="techpara">
                    <strong>Replacement:</strong> {pdfData.control.replacement}
                  </p>
                  <p className="techpara">
                    <strong>
                      Total lures to be used in a season per acre:
                    </strong>{" "}
                    {pdfData.control.totalLuresPerAcre}
                  </p>
                </div>
              </div>
            </div>
            {/* <hr className="mt-5 hrline" /> */}
            <div className="mt-5"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechnicalDataSheet;
