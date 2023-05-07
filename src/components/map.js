export default function init() {
  let map = new ymaps.Map("map", {
    center: [44.988997937527685, 38.933743020347954],
    zoom: 15,
  });

  const shopLayout = ymaps.templateLayoutFactory.createClass(
    '<div class="placemark_layout_container shop"><div class="icon_layout icon_layout_shop"></div></div>'
  );

  const gasLayout = ymaps.templateLayoutFactory.createClass(
    '<div class="placemark_layout_container gas"><div class="icon_layout icon_layout_gas"></div></div>'
  );

  const pharmacyLayout = ymaps.templateLayoutFactory.createClass(
    '<div class="placemark_layout_container pharmacy"><div class="icon_layout icon_layout_pharmacy"></div></div>'
  );

  const kinderLayout = ymaps.templateLayoutFactory.createClass(
    '<div class="placemark_layout_container kinder"><div class="icon_layout icon_layout_kinder"></div></div>'
  );

  const pointLayout = ymaps.templateLayoutFactory.createClass(
    '<div class="placemark_layout_container point"><div class="icon_layout icon_layout_point"></div></div>'
  );

  let buildPlacemark = new ymaps.Placemark(
    [44.98234798158539,38.93998997432942],
    {},
    {
      iconLayout: pointLayout,
      iconImageSize: [24, 21],
      iconImageOffset: [0, 0],
      iconShape: {
        type: "Circle",
        coordinates: [0, 0],
        radius: 10,
      },
    }
  );


  let shopPlacemark1 = new ymaps.Placemark(
    [44.9886448667875, 38.93266678891675],
    {},
    {
      iconLayout: shopLayout,
      iconImageSize: [24, 21],
      iconImageOffset: [0, 0],
      iconShape: {
        type: "Circle",
        coordinates: [0, 0],
        radius: 10,
      },
    }
  );

  let shopPlacemark2 = new ymaps.Placemark(
    [44.99155299591959,38.93142836315387],
    {},
    {
      iconLayout: shopLayout,
      iconImageSize: [24, 21],
      iconImageOffset: [0, 0],
      iconShape: {
        type: "Circle",
        coordinates: [0, 0],
        radius: 10,
      },
    }
  );

  let pharmacyPlacemark = new ymaps.Placemark(
    [44.99004557686081, 38.93282311184162],
    {},
    {
      iconLayout: pharmacyLayout,
      iconImageSize: [24, 21],
      iconImageOffset: [0, 0],
      iconShape: {
        type: "Circle",
        coordinates: [0, 0],
        radius: 10,
      },
    }
  );

  let gasPlacemark = new ymaps.Placemark(
    [44.98931469264693, 38.92421858532184],
    {},
    {
      iconLayout: gasLayout,
      iconImageSize: [24, 21],
      iconImageOffset: [0, 0],
      iconShape: {
        type: "Circle",
        coordinates: [0, 0],
        radius: 10,
      },
    }
  );

  let kinderPlacemark = new ymaps.Placemark(
    [44.98116774392056,38.92509834987872],
    {},
    {
      iconLayout: kinderLayout,
      iconImageSize: [24, 21],
      iconImageOffset: [0, 0],
      iconShape: {
        type: "Circle",
        coordinates: [0, 0],
        radius: 10,
      },
    }
  );

  map.controls.remove("geolocationControl");
  map.controls.remove("searchControl");
  map.controls.remove("zoomControl");
  map.controls.remove("rulerControl");
  map.controls.remove("fullscreenControl");
  map.controls.remove("trafficControl");
  map.controls.remove("typeSelector");
  map.behaviors.disable("scrollZoom");

  map.geoObjects.add(shopPlacemark1);
  map.geoObjects.add(shopPlacemark2);
  map.geoObjects.add(pharmacyPlacemark);
  map.geoObjects.add(gasPlacemark);
  map.geoObjects.add(kinderPlacemark);
  map.geoObjects.add(buildPlacemark);


}