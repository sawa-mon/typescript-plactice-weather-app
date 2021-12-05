type Props = {
  results: {
  country: string,
  cityName: string,
  temperature: string,
  conditionText: string,
  icon: string,
  }
}

export const Results: React.VFC<Props> = ({...props}) => {
  return(
    <>
      <h2>Weather Data</h2>
      {props.results.country && <p>国：{props.results.country}</p>}
      {props.results.cityName && <p>{props.results.cityName}の天気</p>}
      {props.results.temperature && <p>現在の気温：{props.results.temperature} ℃</p>}
      {props.results.conditionText && <p>現在の天候：{props.results.conditionText}</p>}
      {props.results.icon && <img src={props.results.icon}/>}
    </>
    )
  }