"use client"
import { useEffect, useState } from "react";
import React from "react";
import Twitch from "./Twitch";

export default function Countdown(){
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    let date_string = "2023-06-08 14:20:00"

    Twitch.defaultProps = {
    targetID: 'twitch-embed',
    width: '940',
    height: '480',
    channel: 'gotaga',
    }

    function timingCalc(endtime) {
      'use strict';

      var timeTotal = Date.parse(endtime) - Date.parse(new Date()),
        timeSeconds = Math.floor((timeTotal / 1000) % 60),
        timeMinutes = Math.floor((timeTotal / 1000 / 60) % 60),
        timeHours = Math.floor((timeTotal / (1000 * 60 * 60)) % 24),
        timeDays = Math.floor(timeTotal / (1000 * 60 * 60 * 24));

      return {
        'total': timeTotal,
        'seconds': timeSeconds,
        'minutes': timeMinutes,
        'hours': timeHours,
        'days': timeDays
      };

    }

    function installCalc(endtime) {
        function startCalc() {

        var timeTotal = timingCalc(endtime);

        setDays(timeTotal.days)
        setHours(("0" + timeTotal.hours).slice(-2))
        setMinutes(("0" + timeTotal.minutes).slice(-2))
        setSeconds(("0" + timeTotal.seconds).slice(-2))

        if (timeTotal.total <= 0) {

            clearInterval(timingNow);

        }

        }
        startCalc();
        var timingNow = setInterval(startCalc, 1000);
    }

     useEffect(() => {
        setTimeout(() => {
            installCalc(new Date(date_string));
        }, 500);
    },[installCalc]);

    return(
        <section className="flex flex-col items-center w-full mt-2 font-outfit m-auto border-b pb-4">
        {
            (!new Date(date_string) < new Date()) && (
            <>
                <h2 className="text-3xl mb-3">On arrive !</h2>

                <div id="count_div" className="hidden sm:flex justify-center text-white w-full">
                    <div className="bg-primary p-10 m-1 text-center rounded-xl">
                        <span id="days" className='number text-4xl'>{days}</span>
                        <div>Jours</div>
                    </div>
                    <div className="bg-primary p-10 m-1 text-center rounded-xl">
                        <span id="hours" className='number text-4xl'>{hours}</span>
                        <div>Heures</div>
                    </div>
                    <div className="bg-primary p-10 m-1 text-center rounded-xl">
                        <span id="minutes" className='number text-4xl'>{minutes}</span>
                        <div>Minutes</div>
                    </div>
                    <div className="bg-primary p-10 m-1 text-center rounded-xl">
                        <span id="seconds" className='number text-4xl px-2'>{seconds}</span>
                        <div>Secondes</div>
                    </div>
                </div>
            </>
            )
        }

            <p className="sm:hidden w-1/2 m-auto">La conférence commence dans <span id="small_days">{days}</span> jour(s), <span id="small_hours">{hours}</span> heure(s), <span id="small_minutes">{minutes}</span> minute(s) et <span id="small_seconds">{seconds}</span> seconde(s)</p>
            {
                (new Date(date_string) < new Date()) &&
                    <div className="hidden md:block">
                        <Twitch />
                    </div>
                    <div className="mt-2 md:hidden">
                        <a href="https://twitch.tv/gotaga">Le lien est aussi disponible ici</a>
                    </div>
            }
        </section>
    )
}
