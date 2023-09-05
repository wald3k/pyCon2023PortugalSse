---
customTheme : "style"
---

## Server - Client Communication
<hr>
<div class="container">

<section>


<div class="col">
      <img src="./img/me2.jpg" alt="scan_me" style="max-width:200px;border-radius:50%;"/>
</div>

<div class="col">
        Waldemar Sobiecki <br>
        Senior Fullstack Developer @ <span style="color:#69a5f4;font-weight:bold">Ørsted</span>   
</div>

<br>
</div>
</section>

---

<div style="text-align: center; display: grid; grid-template-columns: 1fr 1fr;">

  <div>
     <p>Applications:</p>
        <ul>
            <li>Live chat</li>
            <li>Multiplayer collaboration</li>
            <li>In-app alerts and notifications</li>
            <li>Realtime location tracking</li>
        </ul> 
    </div>
  <div>
    <img src="./img/chat_simple.gif" style="width:400px;"/>
    <img src="./img/slither_io.gif" style="width:400px;"/>
  </div>    
</div>

---

##  HTTP Pooling, Websockets and ...
<img src="./img/good_bad_sse.bmp" style="width:800px;"/>

<!-- 
We'd like to solve a problem of **Immediate communication between services.**
User does not know how things work underneath, but he just wants
to see things quickly/have a feeling of an app being responsive. 

Example of apps:
Chat - Facebook, Telegram etc.
-->

---

# Examples

---

#### HTTP Pooling
<img src="./img/http_pooling/pooling_(1).png" style="min-height: 450px; max-height:680px;"/>

--

#### HTTP Pooling
<img src="./img/http_pooling/pooling_(2).png" style="min-height: 450px; max-height:680px;"/>

--

#### HTTP Pooling
<img src="./img/http_pooling/pooling_(3).png" style="min-height: 450px; max-height:680px;"/>

--

#### HTTP Pooling
<img src="./img/http_pooling/pooling_(4).png" style="min-height: 450px; max-height:680px;"/>

--

#### HTTP Pooling
<img src="./img/http_pooling/pooling_(5).png" style="min-height: 450px; max-height:680px;"/>

--

#### HTTP Pooling
<img src="./img/http_pooling/chrome_pooling_(2).png" style="min-height: 450px; max-height:680px;"/>

---

#### Websockets

<img src="./img/websockets/websockets_(1).png" style="min-height: 450px; max-height:600px;"/>

--

#### Websockets

<img src="./img/websockets/websockets_(2).png" style="min-height: 450px; max-height:600px;"/>

--

#### Websockets

<img src="./img/websockets/websockets_(3).png" style="min-height: 450px; max-height:600px;"/>

--

#### Websockets

<img src="./img/websockets/websockets_(4).png" style="min-height: 450px; max-height:600px;"/>

--

#### Websockets

<img src="./img/websockets/websockets_(5).png" style="min-height: 450px; max-height:600px;"/>

--

#### Websockets

<img src="./img/websockets/websockets_(6).png" style="min-height: 450px; max-height:600px;"/>

--

#### Websockets

<img src="./img/websockets/ws_chrome_(2).png" style="min-height: 450px; max-height:600px;"/>

--

#### Websockets

<img src="./img/websockets/ws_chrome_(3).png"/>


---

## server-sent events

<img src="./img/server_sent_events/sse_(1).png" style="min-height: 450px; max-height:680px;"/>

--

## server-sent events
<img src="./img/server_sent_events/sse_(2).png" style="min-height: 450px; max-height:680px;"/>

--

## server-sent events
<img src="./img/server_sent_events/sse_(3).png" style="min-height: 450px; max-height:680px;"/>

--

## server-sent events
<img src="./img/server_sent_events/sse_(4).png" style="min-height: 450px; max-height:680px;"/>

--

## server-sent events
<img src="./img/server_sent_events/sse_(5).png" style="min-height: 450px; max-height:680px;"/>

--

<img src="./img/server_sent_events/sse_(6).png" style="min-height: 450px; max-height:680px;"/>


--

## server-sent events
<img src="./img/server_sent_events/chrome_sse_(1).png" style="min-height: 400px;"/>

--

## server-sent events
<img src="./img/server_sent_events/chrome_sse_(2).png" style="min-height: 400px;"/>


--

## server-sent events
<img src="./img/server_sent_events/chrome_sse_(3).png"/>


---

## Final Verdict?

<img src="./img/compare.gif" style="min-height: 450px; max-height:680px;"/>



---

<img src="./img/decide.gif" style="max-height:200px;"/>
 <table>
  <tr>
    <th>Pooling</th>
    <th>Websockets</th>
    <th>SSE</th>
  </tr>
  <tr class="pros">
    <td>Easy to implement</td>
    <td>Bi-directional Async</td>
    <td>Easy to implement</td>
  </tr>
  <tr class="cons">
    <td>Big overhead</td>
    <td class="pros">Binary & UTF-8</td>
    <td>No Binary Data</td>
  </tr>
  <tr class="cons">
    <td></td>
    <td>No automatic recovery <span style="font-size:15px">socket.io</span></td>
    <td>Limited max connections  <span style="font-size:15px">Solved with HTTP/2</span></td>
  </tr>
  <tr class="cons">
    <td></td>
    <td>Might need sticky sessions when H-scaling</td>
    <td></td>
  </tr>
</table> 

---















<style type="text/css">
    /* 1. Style header/footer <div> so they are positioned as desired. */
    #header-left {
        position: absolute;
        top: 0%;
        left: 0%;
    }
    #header-right {
        position: absolute;
        top: 0%;
        right: 0%;
    }
    #footer-left {
        position: absolute;
        bottom: 0%;
        left: 0%;
    }
</style>

<!-- 2. Create hidden header/footer <div> -->
<div id="hidden" style="display:none;">
    <div id="header">
        <div id="header-right">
          <img src="./img/qr_linkedin.png" alt="scan_me" style="width:150px"/>
        </div>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script type="text/javascript">
    // 3. On Reveal.js ready event, copy header/footer <div> into each `.slide-background` <div>
    var header = $('#header').html();
    if ( window.location.search.match( /print-pdf/gi ) ) {
        Reveal.addEventListener( 'ready', function( event ) {
            $('.slide-background').append(header);
        });
    }
    else {
        $('div.reveal').append(header);
   }
</script>
