import WorldMap from "react-svg-worldmap";

export default function WorldmapChart(props: { size: any }) {
  const data = [
    { country: "cn", value: 4778 }, // china
    { country: "in", value: 1204 }, // india
    { country: "us", value: 5986 }, // united states
    { country: "id", value: 824 }, // indonesia
    { country: "pk", value: 836 }, // pakistan
    { country: "br", value: 591 }, // brazil
    { country: "ng", value: 114 }, // nigeria
    { country: "bd", value: 905 }, // bangladesh
    { country: "ru", value: 241 }, // russia
    { country: "mx", value: 112 }, // mexico
  ];

  return (
    <WorldMap
      color="blue"
      // title="Top 10 Populous Countries"
      // value-suffix="people"
      size={props.size}
      data={data}
    />
  );
}
