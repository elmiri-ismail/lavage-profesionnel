$(document).ready(function () {
    var exproduitList,
        myTable = document.querySelector('.exproduitList');

    function getall() {
        myTable.innerHTML = "";
        $.ajax({
            url: "crud/api/getExtincteur.php",
            method: "GET",
            success: function (data) {
                myTable.innerHTML = `<tr>
            <th>ID</th>
            <th>Nom de client</th>
            <th>Type de produit</th>
            <th>Prix</th>
            <th>Etat</th>
            </tr>`
                console.log(data);
                exproduitList = JSON.parse(data);
                for (var i = 0; i < exproduitList.length; i++) {
                    myTable.innerHTML += `<tr idoftr='${exproduitList[i]["id"]}'>
                <td>${exproduitList[i]["id"]}</td>
                <td>${exproduitList[i]["titre"]}</td>
                <td>${exproduitList[i]["type"]}</td>
                <td>${exproduitList[i]["prix"]}</td>
                <td>
                ${exproduitList[i]["etat"]}
                </td>
                </tr>`;


                    // document.getElementById(i.toString()).value = exproduitList[i]["etat"]
                    // console.log(exproduitList[i]["etat"])
                    // console.log(document.getElementById(i.toString()))
                }


            }
        })
    }
    getall();





})