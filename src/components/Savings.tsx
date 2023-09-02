"use client"

import { useState } from "react";

function Savings() {
    const [savings, setSavings] = useState([500, 1000]);
    const [newSaving, setNewSaving] = useState("");
    const onAddSaving = () => {
        if (newSaving) {
            const newSavingAmount = Number(newSaving);
            setSavings([...savings, newSavingAmount]);
            setNewSaving("");
        }
    }
    return (
        <section className="flex-1">
            <div>Savings</div>
            <ul>
                {savings.map((saving) => (
                    <li key={saving}>{saving}</li>
                ))}
            </ul>
            <div>
                <form className="flex">
                    <input placeholder="enter savings" value={newSaving} onChange={(e) => { setNewSaving(e?.target?.value) }} type="number" />
                    <input placeholder="enter interest rate" value={newSaving} onChange={(e) => { setNewSaving(e?.target?.value) }} type="number" />
                    <button className="bg-blue-300 rounded-md text-white" onClick={onAddSaving}> Add Saving</button>
                </form>

            </div>
        </section>
    );
}

export default Savings;