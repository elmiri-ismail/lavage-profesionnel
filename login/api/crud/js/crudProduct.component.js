// Application
class CrudProduct extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            productsArray: []
        };
    }
    componentDidMount() {
        this.chargementDonnees();
    }
    chargementDonnees() {

        var productsArray = null;

        // affichage de données par Ajax

        $.getJSON("api/getProduct.php",
            function (data) {
                this.setState({ productsArray: data });
            }.bind(this))
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            });
    }
    //add product
    addproduct(e) {
        $.ajax({
            url: "http://localhost:8080/login/api/crud/api/addProduct.php",
            method: "POST",
            data: {
                titre: ajoutertitre.value,
                type: ajoutertype.value,
                prix: ajouterprix.value,
                etat: ajouteretat.value,
            },
            success: function (data) {
                this.chargementDonnees()
                $("#exampleModalCenter").modal('hide');
                console.log(data)
            }.bind(this)
        })
        e.preventDefault();
    }
    // Remove product
    removeproduct(i) {
        $.ajax({
            url: "http://localhost:8080/login/api/crud/api/deleteProduct.php",
            method: "POST",
            data: {
                id: i
            },
            success: function (data) {
                //   $(this).parent().remove();
                this.chargementDonnees()
            }.bind(this)
        })

    }
    //update product
    updateproduct(i) {
        $.ajax({
            url: "http://localhost:8080/login/api/crud/api/updateProduct.php",
            method: "POST",
            data: {
                id: i,
                titre: Firstname.value,
                Lastname: Lastname.value,
                Matricule: Matricule.value,
                Email: Email.value,
            },
            success: function (data) {
                this.chargementDonnees()
                console.log(data)
            }.bind(this)
        })
        e.preventDefault();
    }






    onChangeInput(e) {
        // this.setState({value: e.target.value})
    }

    render() {
        let productsArray = this.state.productsArray.map((product) => {
            return (
                <Product
                    key={product.id}
                    product={product}
                    onClickClose={this.removeproduct.bind(this, product.id)}
                    onClickUpdate={this.updateproduct.bind(this, product.id)}
                />
            )
        })

        return (
            <div className="container">
                {/* ADD Model */}
                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Ajouter Voiture</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form
                                    id="form-add"
                                    className="form-horizontal"
                                    onSubmit={this.addproduct.bind(this)}>


                                    <div className="form-row">
                                        <div className="col-12">
                                            <label htmlFor="inputName4">Nom de client</label>
                                            <input type="text" className="form-control Firstname" id="ajoutertitre" placeholder="Nom complet" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-12">
                                            <label htmlFor="inputLast4">Matricule</label>
                                            <input type="text" className="form-control Lastname" id="ajoutertype" placeholder="Matricule" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputMatricule4">Prix</label>
                                            <input type="number" className="form-control Matricule" id="ajouterprix" placeholder="Prix" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputEmail4">Etat</label>
                                            <input type="text" className="form-control Email" id="ajouteretat" placeholder="etat" />
                                        </div>
                                    </div>

                                    <div className="input-group text-right">
                                        <div className="input-group-btn">
                                            <button type="submit" className="btn btn-primary submit ">AJOUTER VOITURE</button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table table-hover">
                    <thead className="thead">
                        <tr>
                            <th scope="col">Nom de client</th>
                            <th scope="col">Matricule</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Etat</th>
                            <th scope="col"></th>
                            <th scope="col"></th>


                        </tr>
                    </thead>
                    <tbody>
                        {productsArray}
                    </tbody>
                </table>
            </div>
        )
    }
}