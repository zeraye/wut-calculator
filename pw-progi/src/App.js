import React, { useState } from "react";

import Calculator from "./components/Calculator/Calculator";
import FacultyList from "./components/FacultyList/FacultyList";

const majors = [
  {
    major: "Administracja",
    faculty: "Administracji i Nauk Społecznych",
    pts2017: "109",
    pts2018: "97",
    pts2019: "89",
    pts2020: "87",
  },
  {
    major: "Aerospace Engineering",
    faculty: "Mechaniczny Energetyki i Lotnictwa",
    pts2017: "174",
    pts2018: "158",
    pts2019: "179",
    pts2020: "176",
  },
  {
    major: "Automatyka i robotyka",
    faculty: "Elektroniki i Technik Informacyjnych",
    pts2017: "190",
    pts2018: "176",
    pts2019: "193",
    pts2020: "191",
  },
  {
    major: "Automatyka i robotyka stosowana",
    faculty: "Elektryczny",
    pts2017: "158",
    pts2018: "140",
    pts2019: "157",
    pts2020: "153",
  },
  {
    major: "Automatyka, robotyka i informatyka przemysłowa",
    faculty: "Mechatroniki",
    pts2017: "173",
    pts2018: "156",
    pts2019: "172",
    pts2020: "159",
  },
  {
    major: "Automatyzacja i robotyzacja procesów produkcyjnych",
    faculty: "Inżynierii Produkcji",
    pts2017: "130",
    pts2018: "103",
    pts2019: "100",
    pts2020: "92",
  },
  {
    major: "Biogospodarka",
    faculty: "Instalacji Budowlanych, Hydrotechniki i Inżynierii Środowiska",
    pts2017: "114",
    pts2018: "78",
    pts2019: "110",
    pts2020: "93",
  },
  {
    major: "Biotechnologia",
    faculty: "Chemiczny",
    pts2017: "135",
    pts2018: "125",
    pts2019: "122",
    pts2020: "134",
  },
  {
    major: "Budownictwo",
    faculty: "Inżynierii Lądowej",
    pts2017: "122",
    pts2018: "100",
    pts2019: "111",
    pts2020: "113",
  },
  {
    major: "Budownictwo",
    faculty: "Budownictwa, Mechaniki i Petrochemii (PW Filia w Płocku)",
    pts2017: "51",
    pts2018: "54",
    pts2019: "51",
    pts2020: "50",
  },
  {
    major: "Civil Engineering",
    faculty: "Inżynierii Lądowej",
    pts2017: "75",
    pts2018: "75",
    pts2019: "77",
    pts2020: "70",
  },
  {
    major: "Computer Science",
    faculty: "Elektroniki i Technik Informacyjnych",
    pts2017: "159",
    pts2018: "158",
    pts2019: "172",
    pts2020: "171",
  },
  {
    major: "Computer Science and Information Systems",
    faculty: "Matematyki i Nauk Informacyjnych",
    pts2017: "169",
    pts2018: "165",
    pts2019: "181",
    pts2020: "175",
  },
  {
    major: "Cyberbezpieczeństwo",
    faculty: "Elektroniki i Technik Informacyjnych",
    pts2017: "",
    pts2018: "",
    pts2019: "187",
    pts2020: "184",
  },
  {
    major: "Ekonomia",
    faculty: "Kolegium Nauk Ekonomicznych i Społecznych (PW Filia w Płocku)",
    pts2017: "56",
    pts2018: "51",
    pts2019: "51",
    pts2020: "50",
  },
  {
    major: "Electric and Hybrid Vehicles Engineering",
    faculty: "Samochodów i Maszyn Roboczych",
    pts2017: "76",
    pts2018: "75",
    pts2019: "77",
    pts2020: "72",
  },
  {
    major: "Electrical Engineering",
    faculty: "Elektryczny",
    pts2017: "91",
    pts2018: "91",
    pts2019: "75",
    pts2020: "74",
  },
  {
    major: "Elektromobilność",
    faculty: "Elektryczny",
    pts2017: "",
    pts2018: "",
    pts2019: "136",
    pts2020: "141",
  },
  {
    major: "Elektronika",
    faculty: "Elektroniki i Technik Informacyjnych",
    pts2017: "142",
    pts2018: "122",
    pts2019: "130",
    pts2020: "131",
  },
  {
    major: "Elektrotechnika",
    faculty: "Elektryczny",
    pts2017: "120",
    pts2018: "103",
    pts2019: "111",
    pts2020: "113",
  },
  {
    major: "Energetyka",
    faculty: "Mechaniczny Energetyki i Lotnictwa",
    pts2017: "165",
    pts2018: "146",
    pts2019: "164",
    pts2020: "151",
  },
  {
    major: "Environmental Engineering",
    faculty: "Instalacji Budowlanych, Hydrotechniki i Inżynierii Środowiska",
    pts2017: "76",
    pts2018: "80",
    pts2019: "76",
    pts2020: "70",
  },
  {
    major: "Fizyka techniczna",
    faculty: "Fizyki",
    pts2017: "122",
    pts2018: "125",
    pts2019: "132",
    pts2020: "139",
  },
  {
    major: "Fotonika",
    faculty: "Fizyki",
    pts2017: "105",
    pts2018: "107",
    pts2019: "110",
    pts2020: "120",
  },
  {
    major: "Geodezja i kartografia",
    faculty: "Geodezji i Kartografii",
    pts2017: "112",
    pts2018: "92",
    pts2019: "99",
    pts2020: "92",
  },
  {
    major: "Geoinformatyka",
    faculty: "Geodezji i Kartografii",
    pts2017: "146",
    pts2018: "138",
    pts2019: "157",
    pts2020: "151",
  },
  {
    major: "Gospodarka przestrzenna",
    faculty: "Geodezji i Kartografii",
    pts2017: "130",
    pts2018: "102",
    pts2019: "120",
    pts2020: "112",
  },
  {
    major: "Informatyka",
    faculty: "Elektroniki i Technik Informacyjnych",
    pts2017: "184",
    pts2018: "176",
    pts2019: "196",
    pts2020: "193",
  },
  {
    major: "Informatyka i systemy informacyjne",
    faculty: "Matematyki i Nauk Informacyjnych",
    pts2017: "190",
    pts2018: "188",
    pts2019: "205",
    pts2020: "201",
  },
  {
    major: "Informatyka stosowana",
    faculty: "Elektryczny",
    pts2017: "176",
    pts2018: "168",
    pts2019: "186",
    pts2020: "180",
  },
  {
    major: "Inżynieria biomedyczna",
    faculty: "Elektroniki i Technik Informacyjnych",
    pts2017: "141",
    pts2018: "130",
    pts2019: "147",
    pts2020: "153",
  },
  {
    major: "Inżynieria biomedyczna",
    faculty: "Mechatroniki",
    pts2017: "143",
    pts2018: "117",
    pts2019: "130",
    pts2020: "136",
  },
  {
    major: "Inżynieria chemiczna i procesowa",
    faculty: "Inżynierii Chemicznej i Procesowej",
    pts2017: "128",
    pts2018: "112",
    pts2019: "114",
    pts2020: "114",
  },
  {
    major: "Inżynieria i analiza danych",
    faculty: "Matematyki i Nauk Informacyjnych",
    pts2017: "194",
    pts2018: "192",
    pts2019: "207",
    pts2020: "202",
  },
  {
    major: "Inżynieria Internetu rzeczy",
    faculty: "Elektroniki i Technik Informacyjnych",
    pts2017: "",
    pts2018: "",
    pts2019: "",
    pts2020: "185",
  },
  {
    major: "Inżynieria materiałowa",
    faculty: "Inżynierii Materiałowej",
    pts2017: "114",
    pts2018: "83",
    pts2019: "90",
    pts2020: "70",
  },
  {
    major: "Inżynieria pojazdów elektrycznych i hybrydowych",
    faculty: "Samochodów i Maszyn Roboczych",
    pts2017: "131",
    pts2018: "110",
    pts2019: "107",
    pts2020: "88",
  },
  {
    major: "Inżynieria środowiska",
    faculty: "Instalacji Budowlanych, Hydrotechniki i Inżynierii Środowiska",
    pts2017: "88",
    pts2018: "70",
    pts2019: "90",
    pts2020: "70",
  },
  {
    major: "Inżynieria środowiska",
    faculty: "Budownictwa, Mechaniki i Petrochemii (PW Filia w Płocku)",
    pts2017: "50",
    pts2018: "51",
    pts2019: "50",
    pts2020: "50",
  },
  {
    major: "Inżynieria zarządzania",
    faculty: "Zarządzania",
    pts2017: "90",
    pts2018: "75",
    pts2019: "88",
    pts2020: "89",
  },
  {
    major: "Lotnictwo i kosmonautyka",
    faculty: "Mechaniczny Energetyki i Lotnictwa",
    pts2017: "175",
    pts2018: "161",
    pts2019: "182",
    pts2020: "180",
  },
  {
    major: "Matematyka",
    faculty: "Matematyki i Nauk Informacyjnych",
    pts2017: "173",
    pts2018: "162",
    pts2019: "182",
    pts2020: "186",
  },
  {
    major: "Matematyka i analiza danych",
    faculty: "Matematyki i Nauk Informacyjnych",
    pts2017: "",
    pts2018: "",
    pts2019: "205",
    pts2020: "200",
  },
  {
    major: "Mechanika i budowa maszyn",
    faculty: "Inżynierii Produkcji",
    pts2017: "88",
    pts2018: "79",
    pts2019: "81",
    pts2020: "78",
  },
  {
    major: "Mechanika i budowa maszyn",
    faculty: "Budownictwa, Mechaniki i Petrochemii (PW Filia w Płocku)",
    pts2017: "51",
    pts2018: "51",
    pts2019: "51",
    pts2020: "50",
  },
  {
    major: "Mechanika i projektowanie maszyn",
    faculty: "Mechaniczny Energetyki i Lotnictwa",
    pts2017: "182",
    pts2018: "154",
    pts2019: "185",
    pts2020: "171",
  },
  {
    major: "Mechanika pojazdów i maszyn roboczych",
    faculty: "Samochodów i Maszyn Roboczych",
    pts2017: "116",
    pts2018: "112",
    pts2019: "75",
    pts2020: "71",
  },
  {
    major: "Mechatronics",
    faculty: "Mechatroniki",
    pts2017: "142",
    pts2018: "122",
    pts2019: "102",
    pts2020: "95",
  },
  {
    major: "Mechatronics of Vehicles and Construction Machinery",
    faculty: "Samochodów i Maszyn Roboczych",
    pts2017: "",
    pts2018: "83",
    pts2019: "80",
    pts2020: "81",
  },
  {
    major: "Mechatronika",
    faculty: "Mechatroniki",
    pts2017: "147",
    pts2018: "126",
    pts2019: "133",
    pts2020: "126",
  },
  {
    major: "Mechatronika pojazdów i maszyn roboczych",
    faculty: "Samochodów i Maszyn Roboczych",
    pts2017: "127",
    pts2018: "113",
    pts2019: "80",
    pts2020: "70",
  },
  {
    major: "Ochrona środowiska",
    faculty: "Instalacji Budowlanych, Hydrotechniki i Inżynierii Środowiska",
    pts2017: "90",
    pts2018: "77",
    pts2019: "100",
    pts2020: "87",
  },
  {
    major: "Papiernictwo i poligrafia",
    faculty: "Inżynierii Produkcji",
    pts2017: "77",
    pts2018: "76",
    pts2019: "86",
    pts2020: "77",
  },
  {
    major: "Power Engineering",
    faculty: "Mechaniczny Energetyki i Lotnictwa",
    pts2017: "152",
    pts2018: "123",
    pts2019: "145",
    pts2020: "136",
  },
  {
    major: "Robotyka i automatyka",
    faculty: "Mechaniczny Energetyki i Lotnictwa",
    pts2017: "183",
    pts2018: "160",
    pts2019: "186",
    pts2020: "165",
  },
  {
    major: "Technologia chemiczna",
    faculty: "Chemiczny",
    pts2017: "113",
    pts2018: "103",
    pts2019: "105",
    pts2020: "92",
  },
  {
    major: "Technologia chemiczna",
    faculty: "Budownictwa, Mechaniki i Petrochemii (PW Filia  w Płocku)",
    pts2017: "56",
    pts2018: "53",
    pts2019: "53",
    pts2020: "51",
  },
  {
    major: "Technologia Chemiczna (profil praktyczny)",
    faculty: "Chemiczny",
    pts2017: "",
    pts2018: "143",
    pts2019: "167",
    pts2020: "159",
  },
  {
    major: "Telecommunications",
    faculty: "Elektroniki i Technik Informacyjnych",
    pts2017: "120",
    pts2018: "100",
    pts2019: "107",
    pts2020: "100",
  },
  {
    major: "Telekomunikacja",
    faculty: "Elektroniki i Technik Informacyjnych",
    pts2017: "149",
    pts2018: "121",
    pts2019: "134",
    pts2020: "139",
  },
  {
    major: "Transport",
    faculty: "Transportu",
    pts2017: "90",
    pts2018: "84",
    pts2019: "85",
    pts2020: "70",
  },
  {
    major: "Zarządzanie",
    faculty: "Zarządzania",
    pts2017: "",
    pts2018: "",
    pts2019: "",
    pts2020: "128",
  },
  {
    major: "Zarządzanie bezpieczeństwem infrastruktury krytycznej",
    faculty: "Zarządzania",
    pts2017: "",
    pts2018: "",
    pts2019: "82",
    pts2020: "70",
  },
  {
    major: "Zarządzanie i inżynieria produkcji",
    faculty: "Inżynierii Produkcji",
    pts2017: "96",
    pts2018: "90",
    pts2019: "101",
    pts2020: "90",
  },
];

majors.map((major) => {
  major.favMajor = false;
  major.key = Math.random().toString();
  return major;
});

function App() {
  const [score, setScore] = useState(0);

  const updateScoreHandler = (newScore) => {
    setScore(newScore);
  };

  return (
    <div className="container p-5">
      <Calculator updateScore={updateScoreHandler} />
      <hr />
      <FacultyList majors={majors} pts={score} />
    </div>
  );
}

export default App;
