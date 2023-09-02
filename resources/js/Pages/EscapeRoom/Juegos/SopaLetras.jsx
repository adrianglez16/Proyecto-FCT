// React
import { router, usePage } from '@inertiajs/react'
import React, { useState } from 'react';
import { Container, Row, Col, Button, Alert} from 'react-bootstrap';

export default function Guest() {

    // Codigo para que funcione la sopa de letras
    (function(){"use strict";var n=function(){var n="abcdefghijklmnoprstuvwyz",r=["horizontal","horizontalBack","vertical","verticalUp","diagonal","diagonalUp","diagonalBack","diagonalUpBack"],t={horizontal:function(n,r,t){return{x:n+t,y:r}},horizontalBack:function(n,r,t){return{x:n-t,y:r}},vertical:function(n,r,t){return{x:n,y:r+t}},verticalUp:function(n,r,t){return{x:n,y:r-t}},diagonal:function(n,r,t){return{x:n+t,y:r+t}},diagonalBack:function(n,r,t){return{x:n-t,y:r+t}},diagonalUp:function(n,r,t){return{x:n+t,y:r-t}},diagonalUpBack:function(n,r,t){return{x:n-t,y:r-t}}},o={horizontal:function(n,r,t,o,e){return o>=n+e},horizontalBack:function(n,r,t,o,e){return n+1>=e},vertical:function(n,r,t,o,e){return t>=r+e},verticalUp:function(n,r,t,o,e){return r+1>=e},diagonal:function(n,r,t,o,e){return o>=n+e&&t>=r+e},diagonalBack:function(n,r,t,o,e){return n+1>=e&&t>=r+e},diagonalUp:function(n,r,t,o,e){return o>=n+e&&r+1>=e},diagonalUpBack:function(n,r,t,o,e){return n+1>=e&&r+1>=e}},e={horizontal:function(n,r,t){return{x:0,y:r+1}},horizontalBack:function(n,r,t){return{x:t-1,y:r}},vertical:function(n,r,t){return{x:0,y:r+100}},verticalUp:function(n,r,t){return{x:0,y:t-1}},diagonal:function(n,r,t){return{x:0,y:r+1}},diagonalBack:function(n,r,t){return{x:t-1,y:n>=t-1?r+1:r}},diagonalUp:function(n,r,t){return{x:0,y:t-1>r?t-1:r+1}},diagonalUpBack:function(n,r,t){return{x:t-1,y:n>=t-1?r+1:r}}},i=function(n,r){var t,o,e,i=[];for(t=0;t<r.height;t++)for(i.push([]),o=0;o<r.width;o++)i[t].push("");for(t=0,e=n.length;e>t;t++)if(!a(i,r,n[t]))return null;return i},a=function(n,r,o){var e=l(n,r,o);if(0===e.length)return!1;var i=e[Math.floor(Math.random()*e.length)];return c(n,o,i.x,i.y,t[i.orientation]),!0},l=function(n,r,i){for(var a=[],l=r.height,c=r.width,h=i.length,g=0,v=0,p=r.orientations.length;p>v;v++)for(var d=r.orientations[v],s=o[d],x=t[d],y=e[d],k=0,B=0;l>B;)if(s(k,B,l,c,h)){var w=u(i,n,k,B,x);(w>=g||!r.preferOverlap&&w>-1)&&(g=w,a.push({x:k,y:B,orientation:d,overlap:w})),k++,k>=c&&(k=0,B++)}else{var U=y(k,B,h);k=U.x,B=U.y}return r.preferOverlap?f(a,g):a},u=function(n,r,t,o,e){for(var i=0,a=0,l=n.length;l>a;a++){var u=e(t,o,a),f=r[u.y][u.x];if(f===n[a])i++;else if(""!==f)return-1}return i},f=function(n,r){for(var t=[],o=0,e=n.length;e>o;o++)n[o].overlap>=r&&t.push(n[o]);return t},c=function(n,r,t,o,e){for(var i=0,a=r.length;a>i;i++){var l=e(t,o,i);n[l.y][l.x]=r[i]}};return{validOrientations:r,orientations:t,newPuzzle:function(n,t){var o,e,a=0,l=t||{};o=n.slice(0).sort(function(n,r){return n.length<r.length?1:0});for(var u={height:l.height||o[0].length,width:l.width||o[0].length,orientations:l.orientations||r,fillBlanks:void 0!==l.fillBlanks?l.fillBlanks:!0,maxAttempts:l.maxAttempts||3,preferOverlap:void 0!==l.preferOverlap?l.preferOverlap:!0};!e;){for(;!e&&a++<u.maxAttempts;)e=i(o,u);e||(u.height++,u.width++,a=0)}return u.fillBlanks&&this.fillBlanks(e,u),e},fillBlanks:function(r){for(var t=0,o=r.length;o>t;t++)for(var e=r[t],i=0,a=e.length;a>i;i++)if(!r[t][i]){var l=Math.floor(Math.random()*n.length);r[t][i]=n[l]}},solve:function(n,t){for(var o={height:n.length,width:n[0].length,orientations:r,preferOverlap:!0},e=[],i=[],a=0,u=t.length;u>a;a++){var f=t[a],c=l(n,o,f);c.length>0&&c[0].overlap===f.length?(c[0].word=f,e.push(c[0])):i.push(f)}return{found:e,notFound:i}},print:function(n){for(var r="",t=0,o=n.length;o>t;t++){for(var e=n[t],i=0,a=e.length;a>i;i++)r+=(""===e[i]?" ":e[i])+" ";r+="\n"}return console.log(r),r}}},r="undefined"!=typeof exports&&null!==exports?exports:window;r.wordfind=n()}).call(this);
    !function(e,t,n){"use strict";var r=function(){var r,o,a,l=function(e,n){for(var r="",o=0,a=n.length;a>o;o++){var l=n[o];r+="<div>";for(var u=0,s=l.length;s>u;u++)r+='<button class="letra" x="'+u+'" y="'+o+'">',r+=l[u]||"&nbsp;",r+="</button>";r+="</div>"}t(e).html(r)},u=function(e,n){for(var r="<ul>",o=0,a=n.length;a>o;o++){var l=n[o];r+='<li class="word '+l+'">'+l}r+="</ul>",t(e).html(r)},s=[],i="",d=function(){t(this).addClass("selected"),o=this,s.push(this),i=t(this).text()},c=function(e){if(o){var n=s[s.length-1];if(n!=e){for(var r,l=0,u=s.length;u>l;l++)if(s[l]==e){r=l+1;break}for(;r<s.length;)t(s[s.length-1]).removeClass("selected"),s.splice(r,1),i=i.substr(0,i.length-1);var d=p(t(o).attr("x")-0,t(o).attr("y")-0,t(e).attr("x")-0,t(e).attr("y")-0);d&&(s=[o],i=t(o).text(),n!==o&&(t(n).removeClass("selected"),n=o),a=d);var c=p(t(n).attr("x")-0,t(n).attr("y")-0,t(e).attr("x")-0,t(e).attr("y")-0);c&&(a&&a!==c||(a=c,h(e)))}}},f=function(t){var n=t.originalEvent.touches[0].pageX,r=t.originalEvent.touches[0].pageY,o=e.elementFromPoint(n,r);c(o)},v=function(){c(this)},h=function(e){for(var n=0,o=r.length;o>n;n++)if(0===r[n].indexOf(i+t(e).text())){t(e).addClass("selected"),s.push(e),i+=t(e).text();break}},z=function(){for(var e=0,n=r.length;n>e;e++)r[e]===i&&(t(".selected").addClass("found"),r.splice(e,1),t("."+i).addClass("palabraEncontrada")),0===r.length&&t(".letra").addClass("complete");t(".selected").removeClass("selected"),o=null,s=[],i="",a=null},p=function(e,t,r,o){for(var a in n.orientations){var l=n.orientations[a],u=l(e,t,1);if(u.x===r&&u.y===o)return a}return null};return{create:function(e,o,a,s){r=e.slice(0).sort();var i=n.newPuzzle(e,s);return l(o,i),u(a,r),window.navigator.msPointerEnabled?(t(".letra").on("MSPointerDown",d),t(".letra").on("MSPointerOver",c),t(".letra").on("MSPointerUp",z)):(t(".letra").mousedown(d),t(".letra").mouseenter(v),t(".letra").mouseup(z),t(".letra").on("touchstart",d),t(".letra").on("touchmove",f),t(".letra").on("touchend",z)),i},solve:function(e,r){for(var o=n.solve(e,r).found,a=0,l=o.length;l>a;a++){var u=o[a].word,s=o[a].orientation,i=o[a].x,d=o[a].y,c=n.orientations[s];if(!t("."+u).hasClass("palabraEncontrada")){for(var f=0,v=u.length;v>f;f++){var h=c(i,d,f);t('[x="'+h.x+'"][y="'+h.y+'"]').addClass("solved")}t("."+u).addClass("palabraEncontrada")}}}}};window.wordfindgame=r()}(document,jQuery,wordfind);

    // Form
    const { flash } = usePage().props;

    const [values] = useState({
      reward: true,
    })
  
  
    function handleSubmit(e) {
      e.preventDefault();
      router.get('/escape-room/play/check', values)
    }
    

    /* Se inicia la sopa de letras */
    function CrearSL(){
        // Array con las palabras que el usuario debe buscar
        var palabras = [
            'informatica', 'platita', 'roomer', 'suspender', 'nano', 'messi'
        ];

        // Comienza un juego de palabras
        var sopaLetras = wordfindgame.create(palabras, '#contenedor', '#palabras-sopadeletras');

        // Función para resolver la sopa de petras             
        $("#BTNresolver").click(function () {
            var resultado = wordfindgame.solve(sopaLetras, palabras);
            console.log(resultado);
        }); 
    }

    function handleSubmit() {
        router.post('/escape-room/play/check', values) // Permite @old en el formulario
    }

    function ChequearSL() {
        const contenedor = document.getElementById("contenedor"); //Guardo el contenedor en una variable
        const div = contenedor.querySelectorAll("div");
        const cheqeo = div[0].lastChild.className;
        const flash = document.querySelector(".flash");

        if (cheqeo == 'letra solved found complete') {
            console.log('bien found');
            handleSubmit();

        } else if (cheqeo == 'letra complete') {
            console.log('bien');
            handleSubmit();
        } else {
            // Aqui se ha de mandar el msg flash a la view con js, pq sino se reinica la sopa de letras
            flash.innerHTML = "No has encontrado todas las palabras";
            flash.classList.add("alert", "alert-warning");
        }
    }

    return (
      <>
        <Container className="text-center bg-light">
            <Row>
                <Col lg={4} className="pb-3">
                    <Button id="BTNcrear" onClick={CrearSL}>Crear sopa de letras</Button>
                </Col>
                <Col lg={4} className="pb-3">
                    <Button id="BTNresolver">Resolver sopa de letras</Button>
                </Col>
                <Col lg={4} className="pb-3">
                    <Button id="BTNchuquear" onClick={ChequearSL}>Revisar sopa de letras</Button>
                </Col>
            </Row>
            <Row>
            <p className="flash">
                {flash.message && (
                    <Alert key={'success'} variant={'success'}>
                        <div>{flash.message}</div>
                    </Alert>
                )}
                {flash.errormessage && (
                    <Alert key={'danger'} variant={'danger'}>
                        <div>{flash.errormessage}</div>
                    </Alert>
                )}
            </p>
            </Row>
            <Row className="sl pt-3">
                <Col lg={6}>
                    <div id="contenedor"></div>
                </Col>
            </Row>
            <Row className="sl pt-3 pb-3">
                <Col lg={6}>
                    <div id="palabras-sopadeletras"></div>
                </Col>

            </Row>
        </Container>
      </>
    )
}