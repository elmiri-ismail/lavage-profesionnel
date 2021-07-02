$(document).ready(function () {
    var exproduitList,
        myTable = document.querySelector('.exproduitList');

    function getall() {
        myTable.innerHTML = "";
        $.ajax({
            url: "api/getExtincteur.php",
            method: "GET",
            success: function (data) {
                myTable.innerHTML = `<tr>
            <th>ID</th>
            <th>Nom de client</th>
            <th>Type de produit</th>
            <th>Prix</th>
            <th>Etat</th>
            <th>Editing</th>
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
                <select id=${i.toString()} class="select2">
                <option>en_attente</option>
                <option>en_cours</option>
                <option>termine</option>
                </select>
                </td>
                <td><span class="btn bg-info edit" >update</span><span class="btn bg-danger delete">delete</span></td>
                </tr>`;

                    document.getElementById(i.toString()).value = exproduitList[i]["etat"]
                    console.log(exproduitList[i]["etat"])
                    console.log(document.getElementById(i.toString()))

                }

                delet()
                edit()
                changeEtat()
            }
        })
    }
    getall();

    let etatJust
    function changeEtat() {

        document.querySelectorAll('.select2').forEach(element => {
            element.onchange = (e) => {


                let deletedE = e.target;
                deletedE = deletedE.closest('tr')
                let deletedEID = deletedE.getAttribute("idoftr")

                console.log(deletedEID)

                etatJust = element.value;


                if (etatJust === "En attente") {
                    etatJust = "en_attente"
                } else if (etatJust === "En cours") {
                    etatJust = "en_cours"
                } else if (etatJust === "Termine") {
                    etatJust = "termine"
                }

                console.log(etatJust)


                $.ajax({
                    url: 'api/status.php',
                    type: 'post',
                    data: {
                        id: deletedEID,
                        etatJust: etatJust,
                    },
                    datatype: JSON,
                    success: (data) => {
                        console.log(data)
                        // document.querySelector('.exproduitName').value = ""
                        // document.querySelector('.exproduitType').value = ""
                        // document.querySelector('.exproduitPrix').value = ""
                        getall()
                    }

                })

            }
        });

    }

    document.querySelector('.submit-exproduit').onclick = () => {

        let name,
            type,
            prix,
            etat;

        name = document.querySelector('.exproduitName').value;
        type = document.querySelector('.exproduitType').value;
        prix = document.querySelector('.exproduitPrix').value;
        etat = document.querySelector('select').value;
        console.log(etat)
        if (etat === "En attente") {
            etat = "en_attente"
        } else if (etat === "En cours") {
            etat = "en_cours"
        } else if (etat === "Termine") {
            etat = "termine"
        }

        $.ajax({
            url: 'api/addExtincteur.php',
            type: 'post',
            data: {
                titre: name,
                type: type,
                prix: prix,
                etat: etat
            },
            datatype: JSON,
            success: (data) => {
                console.log(data)
                document.querySelector('.exproduitName').value = ""
                document.querySelector('.exproduitType').value = ""
                document.querySelector('.exproduitPrix').value = ""
                getall()
            }

        })

    }


    function delet() {

        document.querySelectorAll('.delete').forEach(element => {
            element.onclick = (e) => {


                let deletedE = e.target;
                deletedE = deletedE.closest('tr')
                let deletedEID = deletedE.getAttribute("idoftr")

                console.log(deletedEID)

                $.ajax({
                    url: 'api/delete.php',
                    type: 'post',
                    data: {
                        id: deletedEID
                    },
                    datatype: JSON,
                    success: (data) => {
                        console.log(data)
                        getall()
                    }

                })

            }
        });

    }

    function edit() {
        document.querySelectorAll('.edit').forEach(element => {
            element.onclick = (e) => {
                let deletedE
                let deletedEID
                let editBtn
                let cancelEditBtn
                let name
                let type
                let prix


                let editTitre
                let editType
                let editPrix





                // 
                deletedE = null
                deletedEID = null
                editBtn = null
                cancelEditBtn = null
                name = null
                type = null
                prix = null


                editTitre = null
                editType = null
                editPrix = null






                deletedE = e.target;
                deletedE = deletedE.closest('tr')

                editTitre = deletedE.querySelectorAll('td')[1].textContent
                editType = deletedE.querySelectorAll('td')[2].textContent
                editPrix = deletedE.querySelectorAll('td')[3].textContent


                document.querySelector('.exproduitName').value = editTitre
                document.querySelector('.exproduitType').value = editType
                document.querySelector('.exproduitPrix').value = editPrix

                console.log(editTitre)

                deletedEID = deletedE.getAttribute("idoftr")
                console.log(deletedEID)
                editBtn = document.querySelector('.edit-exproduit')
                cancelEditBtn = document.querySelector('.cancel-exproduit')

                editBtn.style = 'display:block';
                cancelEditBtn.style = 'display:block';
                document.querySelector('.submit-exproduit').style = 'display:none';


                editBtn.addEventListener('click', () => {


                    name = document.querySelector('.exproduitName').value;
                    type = document.querySelector('.exproduitType').value;
                    prix = document.querySelector('.exproduitPrix').value;
                    etat = document.querySelector('select').value;

                    if (etat === "En attente") {
                        etat = "en_attente"
                    } else if (etat === "En cours") {
                        etat = "en_cours"
                    } else if (etat === "Termine") {
                        etat = "termine"
                    }

                    $.ajax({
                        url: 'api/edit.php',
                        type: 'post',
                        data: {
                            id: deletedEID,
                            titre: name,
                            type: type,
                            prix: prix,
                            etat: etat
                        },
                        datatype: JSON,
                        success: (data) => {
                            console.log(data)

                            document.querySelector('.exproduitName').value = ""
                            document.querySelector('.exproduitType').value = ""
                            document.querySelector('.exproduitPrix').value = ""

                            editBtn.style = 'display:none';
                            cancelEditBtn.style = 'display:none';
                            document.querySelector('.submit-exproduit').style = 'display:block';

                            name = undefined;
                            type = undefined
                            prix = undefined
                            etat = undefined
                            deletedE = undefined
                            deletedEID = undefined
                            editBtn = undefined
                            cancelEditBtn = undefined

                            getall()
                        }

                    })

                }
                )

                cancelEditBtn.onclick = () => {


                    document.querySelector('.exproduitName').value = ""
                    document.querySelector('.exproduitType').value = ""
                    document.querySelector('.exproduitPrix').value = ""
                    editBtn.style = 'display:none';
                    cancelEditBtn.style = 'display:none';
                    document.querySelector('.submit-exproduit').style = 'display:block';

                    name = undefined;
                    type = undefined
                    prix = undefined
                    deletedE = undefined
                    deletedEID = undefined
                    editBtn = undefined
                    cancelEditBtn = undefined
                }


            }
        });

    }



})