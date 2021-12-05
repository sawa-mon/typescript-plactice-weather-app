import React from "react"

type Props = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: any) => void;
  city: string;
}

export const Form :React.VFC <Props> = ({...props}) =>  {
  return(
    <form onSubmit={props.getWeather}>
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={e => props.setCity(e.target.value)}
      />
      <button type="submit" >Get Weather</button>
    </form>
  )
}