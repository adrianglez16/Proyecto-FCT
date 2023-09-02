// React
import { Head, usePage } from '@inertiajs/react';
import { Container, Row, Form  } from "react-bootstrap";


export default function Comments(props) {
    const users = props.usuarios;
    const comments = props.comments;
    // console.log(users);
    // console.log(comments);
    
    return(
        <>
            <div class="card comment-section">
                <div class="p-3">
                    <h4>Comentarios</h4>
                </div>

                {/* Form */}
                <div class="mt-3 d-flex flex-row align-items-center p-3 form-color">
                    <img src="https://i.imgur.com/zQZSWrt.jpg" width="50" class="rounded-circle me-2"/>
                    <input type="text" class="form-control" placeholder="Enter your comment..."/>
                </div>

                {/* Comments */}
                {users.length ? (
                    users.map((user, index) => {
                        const fecha = comments[index].created_at.substring(0, 10);
                        const hora = comments[index].created_at.substring(11, 16);
                        const fecha_hora = fecha + ' ' + hora;
                        
                        return (
                        <div class="mt-2">
                            <div class="d-flex flex-row p-3">
                            {
                            user.avatar == 'admin.png'
                                ? <img src='/assets/img/admin.png' alt=" avatar" className="rounded-circle  me-3" style={{ width: '40px', height: "40px"}}/>
                                : user.avatar == 'avatar.jpg'
                                    ? <img src='/assets/img/avatar.jpg' alt=" avatar" className="rounded-circle  me-3" style={{ width: '40px', height: "40px"}}/>
                                    : <img src={"/storage/assets/img/" + user.avatar} alt="custom_avatar" className="rounded-circle  me-3" style={{ width: '40px', height: "40px"}}/>
                            }
                                        
                                <div class="w-100">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex flex-row align-items-center">
                                            <span class="me-2">{user.name}</span>
                                            <small class="c-badge">Top Comment</small>
                                        </div>

                                        <small>{fecha_hora}</small>
                                    </div>

                                    <p class="text-justify comment-text mb-0">{comments[index].comment}</p>

                                    {/* Feed (Ratings and Replys) */}
                                    <div class="d-flex flex-row user-feed">
                                        <span class="wish"><i class="fa fa-heartbeat me-2"></i>0</span>
                                        <span class="ms-3"><i class="fa fa-comments-o me-2"></i>Reply</span>       
                                    </div> 
                                </div>         
                            </div>          
                        </div>
                        );
                    })
                    ) : (
                    <Col className="m-3 pt-3 text-center">
                        <h2>No hay ningun comentario realizado. ¡Se el primero en hacerlo!</h2>
                    </Col>
                    )
                }
            </div>
        </>
    )
}