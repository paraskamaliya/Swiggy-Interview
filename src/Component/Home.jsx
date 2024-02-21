import React, { useEffect } from 'react'
import { useState } from 'react'

function Home() {
    const [year, setYear] = useState("");
    const [data, setData] = useState(
        [
            {
                "name": "Tyrion Lannister",
                "birthday": "12/02/1978"
            },
            {
                "name": "Cersei Lannister",
                "birthday": "11/30/1975"
            },
            {
                "name": "Daenerys Targaryen",
                "birthday": "11/24/1991"
            },
            {
                "name": "Arya Stark",
                "birthday": "11/25/1996"
            },
            {
                "name": "Jon Snow",
                "birthday": "12/03/1989"
            },
            {
                "name": "Sansa Stark",
                "birthday": "08/15/1992"
            },
            {
                "name": "Jorah Mormont",
                "birthday": "12/16/1968"
            },
            {
                "name": "Jaime Lannister",
                "birthday": "12/06/1975"
            },
            {
                "name": "Sandor Clegane",
                "birthday": "11/07/1969"
            },
            {
                "name": "Tywin Lannister",
                "birthday": "10/12/1951"
            },
            {
                "name": "Theon Greyjoy",
                "birthday": "12/31/1989"
            },
            {
                "name": "Samwell Tarly",
                "birthday": "12/07/1990"
            },
            {
                "name": "Joffrey Baratheon",
                "birthday": "06/12/1992"
            },
            {
                "name": "Catelyn Stark",
                "birthday": "12/03/1962"
            },
            {
                "name": "Bran Stark",
                "birthday": "12/02/1995"
            },
            {
                "name": "Petyr Baelish",
                "birthday": "11/20/1974"
            },
            {
                "name": "Robb Stark",
                "birthday": "11/28/1986"
            },
            {
                "name": "Brienne of Tarth",
                "birthday": "11/27/1985"
            },
            {
                "name": "Margaery Tyrell",
                "birthday": "12/02/1989"
            },
            {
                "name": "Stannis Baratheon",
                "birthday": "09/14/1971"
            },
            {
                "name": "Davos Seaworth",
                "birthday": "02/13/1973"
            },
            {
                "name": "Tormund Giantsbane",
                "birthday": "12/14/1974"
            },
            {
                "name": "Jeor Mormont",
                "birthday": "11/01/1955"
            },
            {
                "name": "Eddard Stark",
                "birthday": "12/02/1963"
            },
            {
                "name": "Khal Drogo",
                "birthday": "12/05/1980"
            },
            {
                "name": "Ramsay Bolton",
                "birthday": "12/05/1976"
            },
            {
                "name": "Robert Baratheon",
                "birthday": "12/02/1965"
            },
            {
                "name": "Daario Naharis",
                "birthday": "12/02/1985"
            },
            {
                "name": "Viserys Targaryen",
                "birthday": "12/06/1984"
            }
        ]
    )

    const [res, setRes] = useState([]);

    const [sun, setSun] = useState([]);
    const [mon, setMon] = useState([]);
    const [tue, setTue] = useState([]);
    const [wed, setWed] = useState([]);
    const [thu, setThu] = useState([]);
    const [fri, setFri] = useState([]);
    const [sat, setSat] = useState([]);

    console.log(sun, mon)

    const filterTheYear = (year) => {
        for (let i = 0; i < data.length; i++) {
            let personData = data[i];
            let fullDate = personData.birthday;
            fullDate = fullDate.split("/");
            let currDate = new Date(year, fullDate[0], fullDate[1]).getDay();
            setRes(prev => prev = [...prev, { day: currDate, "age": new Date().getFullYear() - fullDate[2], name: data[i].name.split(" ") }])
        }
        console.log(res);
        FilterData();
    }
    
    const FilterData = () => {
        setSun(prev => prev = []);
        setMon(prev => prev = []);
        setTue(prev => prev = []);
        setWed(prev => prev = []);
        setThu(prev => prev = []);
        setFri(prev => prev = []);
        setSat(prev => prev = []);
        for (let i = 0; i < res.length; i++) {
            if (res[i].day === 0) {
                setSun(prev => prev = [...prev, res[i]])
            } else if (res[i].day === 1) {
                setMon(prev => prev = [...prev, res[i]])
            } else if (res[i].day === 2) {
                setTue(prev => prev = [...prev, res[i]])
            } else if (res[i].day === 3) {
                setWed(prev => prev = [...prev, res[i]])
            } else if (res[i].day === 4) {
                setThu(prev => prev = [...prev, res[i]])
            } else if (res[i].day === 5) {
                setFri(prev => prev = [...prev, res[i]])
            } else {
                setSat(prev => prev = [...prev, res[i]])
            }
        }
    }

    const generateColor = () => {
        let bag = "#";
        let alpha = "abcdefghijklmnopqrstuvwxyz";
        for (let i = 0; i < 6; i++) {
            bag += alpha[Math.ceil(Math.random() * 10)]
        }
        return bag;
    }

    return (
        <div>
            <div>
                <textarea name="data" id="" cols="30" rows="10" value={data} />
            </div>
            <select name="year" id="" onChange={(e) => {
                setYear((prev) => prev = e.target.value);
                setRes((prev) => prev = [])
                filterTheYear(e.target.value);
            }}>
                <option value="">Select Year</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                <option value="2032">2032</option>
                <option value="2033">2033</option>
            </select>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ height: "300px", width: "300px", border: "1px solid black" }}>
                    <h1>Sun</h1>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
                        {sun.length > 0 ? sun.map((el, i) => {
                            return <h3 key={i} style={{ backgroundColor: `${generateColor()}`, padding: "5%", textAlign: "center" }}>{`${el.name[0][0]}${el.name[1][0]}`}</h3>
                        }) : <h1>None</h1>}
                    </div>
                </div>
                <div style={{ height: "300px", width: "300px", border: "1px solid black" }}>
                    <h1>Mon</h1>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
                        {mon.length > 0 ? mon.map((el, i) => {
                            return <h3 key={i} style={{ backgroundColor: `${generateColor()}`, padding: "5%", textAlign: "center" }}>{`${el.name[0][0]}${el.name[1][0]}`}</h3>
                        }) : <h1>None</h1>}
                    </div>
                </div>
                <div style={{ height: "300px", width: "300px", border: "1px solid black" }}>
                    <h1>Tue</h1>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
                        {tue.length > 0 ? tue.map((el, i) => {
                            return <h3 key={i} style={{ backgroundColor: `${generateColor()}`, padding: "5%", textAlign: "center" }}>{`${el.name[0][0]}${el.name[1][0]}`}</h3>
                        }) : <h1>None</h1>}
                    </div>
                </div>
                <div style={{ height: "300px", width: "300px", border: "1px solid black" }}>
                    <h1>Wed</h1>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
                        {wed.length > 0 ? wed.map((el, i) => {
                            return <h3 key={i} style={{ backgroundColor: `${generateColor()}`, padding: "5%", textAlign: "center" }}>{`${el.name[0][0]}${el.name[1][0]}`}</h3>
                        }) : <h1>None</h1>}
                    </div>
                </div>
                <div style={{ height: "300px", width: "300px", border: "1px solid black" }}>
                    <h1>Thu</h1>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
                        {thu.length > 0 ? thu.map((el, i) => {
                            return <h3 key={i} style={{ backgroundColor: `${generateColor()}`, padding: "5%", textAlign: "center" }}>{`${el.name[0][0]}${el.name[1][0]}`}</h3>
                        }) : <h1>None</h1>}
                    </div>
                </div>
                <div style={{ height: "300px", width: "300px", border: "1px solid black" }}>
                    <h1>Fri</h1>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
                        {fri.length > 0 ? fri.map((el, i) => {
                            return <h3 key={i} style={{ backgroundColor: `${generateColor()}`, padding: "5%", textAlign: "center" }}>{`${el.name[0][0]}${el.name[1][0]}`}</h3>
                        }) : <h1>None</h1>}
                    </div>
                </div>
                <div style={{ height: "300px", width: "300px", border: "1px solid black" }}>
                    <h1>Sat</h1>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
                        {sat.length > 0 ? sat.map((el, i) => {
                            return <h3 key={i} style={{ backgroundColor: `${generateColor()}`, padding: "5%", textAlign: "center" }}>{`${el.name[0][0]}${el.name[1][0]}`}</h3>
                        }) : <h1>None</h1>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home