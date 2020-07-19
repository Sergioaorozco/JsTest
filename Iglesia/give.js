function alerta()
{
    var myarray= new Array(
    "1. No tengas otros dioses además de mí.",
    "2.No te hagas ningún ídolo.",
    "3.No uses el nombre del Señor tu Dios en falso.",
    "4.Separa el séptimo día para honrar al Señor tu Dios.",
    "5.Honra a tu padre y a tu madre.",
    "6.No mates.",
    "7.No cometas adulterio.",
    "8.No robes.",
    "9.No digas mentiras en contra de otra persona.",
    "10.No codicies las cosas de otra persona."
    );
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("random-name").innerHTML=random;
    document.getElementbyId("parra")= true;
}