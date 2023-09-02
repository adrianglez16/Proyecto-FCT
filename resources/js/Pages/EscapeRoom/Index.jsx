// React
import { Head, usePage } from '@inertiajs/react'
import { Container, Row  } from "react-bootstrap"

// Components
import NavigationBar from "@/Layouts/NavigationBar";
import Footer from '@/Layouts/Footer';


export default function Index() {
  
    const { SRs } = usePage().props;
    // console.log(SRs);
    
    function Boton(y){
        // console.log('hey, pulso el boton de ' + y);
        filterSelection(y);
    }
    
    filterSelection("all")
    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("sr");
        if (c == "all") c = "";
        
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            // console.log(x[i]);
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
    }

    function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
        }
    }

    function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);     
            }
        }
        element.className = arr1.join(" ");
    }
  
    return (
    <>
        <Head title="EscapeRooms" />
      
        <NavigationBar />

        <Container className="pt-3 pb-3">
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
                    <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                    <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p>
                </div>
            </div>

            <div className="mb-3">
                <button type="button" className="btn btn-lg btn-primary me-3" onClick={() => Boton('all')}>Todos</button>
                <button type="button" className="btn btn-lg btn-info me-3" onClick={() => Boton('no_psw')}><i className="bi bi-unlock-fill me-2"></i>Publicos</button>
                <button type="button" className="btn btn-lg btn-warning" onClick={() => Boton('psw')}><i className="bi bi-lock-fill me-2"></i>Limitados</button>
            </div>

            <div className="row mb-2">
                
            {SRs.length ? (
                SRs.map((SR, index) => {
                    const fecha = SR.created_at.substring(0, 10);
                    const hora = SR.created_at.substring(11, 16);
                    const fecha_hora = fecha + ' ' + hora;

                    var psw = "";
                    var psw_class = "";
                    if(SR.psw != null){
                        psw = "Limited";
                        psw_class="sr psw";
                    } else{
                        psw = "Public";
                        psw_class="sr no_psw";
                    }

                    // console.log(index);

                    return (
                    <div className="col-md-6">
                        <div className={psw_class}>
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-primary">{psw}</strong>
                                    <h3 className="mb-0">{SR.name}</h3>
                                    <div className="mb-1 text-muted">{fecha_hora}</div>
                                    <p className="card-text mb-auto">{SR.description}</p>
                                    <a href={"/escape-room/show/" + SR.id} className="stretched-link">Continue reading</a>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
                })
                ) : (
                <Col className="m-3 pt-3 text-center">
                    <h2>No se ha encontrado ninguna EscapeRoom. ¡Intentalo mas tarde!</h2>
                </Col>
                )
            }
            </div>
        </Container>

        <Footer />
    </>
  )
}