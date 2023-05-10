import React from "react";
import { DateTimeReservationProp } from "./types";
import { ShowDateTimeRes, TextDTR, ShowDateBar, BtnDateBar, WeekDay, WeekDate, ShowTimeBar, BtnTimeBar } from "./styles";

/** 
 * DateTimeReservations component used to schedule an appointment for a test drive
 * Example: <DateTimeReservation
 * dates={["Viernes 10 Mar", "Sábado 11 Mar", "Domingo 12 Mar", "Lunes 13 Mar", "Martes 14 Mar"]}
 * availableHours={["09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]} />
 */
const DateTimeReservation: React.FC<DateTimeReservationProp> = ({
    dates,
    availableHours
}) => {
    return (
        <ShowDateTimeRes>
            <TextDTR>Escoge la fecha y rango de horario para realizar la prueba</TextDTR> 
            <ShowDateBar>
                {dates.map((date, i) => {
                    const formattedDate = date.split(' ');
                    return (
                        <BtnDateBar key={i}>
                            <WeekDay key={i + 10000}>{formattedDate[0]}</WeekDay>
                            <WeekDate key={i + 20000}>{formattedDate[1] + " " + formattedDate[2]}</WeekDate>
                        </BtnDateBar>)
                })}
            </ShowDateBar>
            <ShowTimeBar>
                {availableHours.map((hours, i) => {
                    return (
                        <BtnTimeBar key={i}>{hours}</BtnTimeBar>
                    )
                })}
            </ShowTimeBar>
        </ShowDateTimeRes>
    )
}

export default DateTimeReservation