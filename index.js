function update(){
    console.log("Updating Data");
    fetch("data.json")
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp.data);
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;

            cases = element.infected;
            if(cases>25){
                color = "rgb(255,0,0)"
            }
            else{
                color = "rgb(0,200,0)"
            }
            //point marker
            new mapboxgl.Marker({
                draggable: false,
                color: color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
                 
        });
    })
}
var interval = 2000;
setInterval(update, interval);
