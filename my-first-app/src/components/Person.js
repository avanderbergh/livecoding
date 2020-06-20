import React from "react";
import "./Person.css";

import PersonDetails from "./PersonDetails";
import PersonImage from "./PersonImage"

const Person = () => {
    return (
        <section>
            <PersonDetails />
            <PersonImage />
        </section>
    )
}

export default Person;