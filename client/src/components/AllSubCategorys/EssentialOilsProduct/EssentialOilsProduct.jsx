import React from 'react';
import './EssentialOilsProduct.scss';

const essentialOilsData = [
  {
    category: 'Key Benefits',
    benefits: [
      { title: 'Natural Pest Control', description: 'Effective against pests like aphids, whiteflies, and mites. Oils such as neem, eucalyptus, and citronella disrupt insect nervous systems and deter feeding.' },
      { title: 'Antifungal and Antibacterial Properties', description: 'Oils like tea tree, thyme, and oregano help control plant diseases caused by fungi and bacteria without leaving harmful residues.' },
      { title: 'Biodegradability & Eco-Friendliness', description: 'Essential oils break down naturally, reducing environmental pollution and minimizing soil and water contamination.' },
      { title: 'Resistance Management', description: 'Complex compositions make it difficult for pests to develop resistance, ensuring long-term effectiveness.' },
      { title: 'Synergistic Effects with Other Agrochemicals', description: 'Can be used with conventional pesticides or as emulsifiable concentrates to enhance efficacy while reducing chemical load.' }
    ]
  },
  {
    category: 'Applications',
    applications: [
      { title: 'Botanical Pesticides', description: 'Essential oil-based bio-pesticides act as contact insecticides or repellents.' },
      { title: 'Plant Growth Promoters', description: 'Some oils enhance plant growth and stress resistance.' },
      { title: 'Seed Treatments', description: 'Essential oil coatings protect seeds from pathogens and pests.' },
      { title: 'Post-Harvest Protection', description: 'Essential oils prevent fungal growth and insect infestation in stored grains and produce.' }
    ]
  }
];

const EssentialOilsProduct = () => {
  return (
    <div className="main-container-oil">
      {essentialOilsData.map((section, index) => (
        <div key={index} className='innper-part'>
          <h2 className='head'>{section.category}</h2>
          {section.benefits && section.benefits.map((benefit, i) => (
            <div className="benefit" key={i}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
          {section.applications && section.applications.map((application, i) => (
            <div className="application" key={i}>
              <h3>{application.title}</h3>
              <p>{application.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EssentialOilsProduct;
