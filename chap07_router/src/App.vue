<script>
// npm i vue-router
// router 설정은 보통 src/router 폴더를 생성 후 index.js 파일에 설정한다
// router에서 설정한 index.js 파일을 main.js에서 use로 불러와 사용(등록)

// <RouterLink>를 이용해 페이지 변경을 구현한다
// <RouterView>에 패스에 매칭된 컴포넌트가 표시된다
export default {

}
</script>

<template>
  <div class="m-3">
    <h1>Chap07 Router</h1>

    <div>
      <RouterLink to="/">INDEX</RouterLink> | 
      <RouterLink to="/A02Attr">A02Attr</RouterLink> |
      <RouterLink :to="{path: '/A02'}">A02</RouterLink> |
      <RouterLink :to="{path: '/Attrs'}">Attrs</RouterLink> |
      <RouterLink :to="{name: 'attrs'}">A02Attr</RouterLink> |

      <RouterLink to="/A03Params/1001/놀부/10">A03 1001</RouterLink> |
      <RouterLink :to="{name: 'params', params: {no: 1002, name: '향단', id: 11}}">A03 1002</RouterLink> |

      <RouterLink to="/A04Props/1003/흥부/12">A04 1003</RouterLink> |
      <RouterLink :to="{name: 'props', params: {no: 1004, name: '춘향', id: 13}}">A04 1004</RouterLink> |

      <RouterLink to="/A05Contact">A05Contact</RouterLink> |

      <RouterLink to="/A06Query?no=1005&name=놀부&address=Seoul#TOP">A06 1005</RouterLink> |
      <RouterLink :to="{
        name: 'query', 
        query: {no: 1006, name: '방자', address: '부산'},
        hash: '#BTM'
      }">A06 1005</RouterLink> |

      <RouterLink to="/A07Push">A07Push</RouterLink> |

      <RouterLink to="/A08Child">A08Child</RouterLink> |
      <RouterLink to="/A08Child/way">A08 WAY</RouterLink> |

      <RouterLink to="/ABC">ABC</RouterLink> |
    </div>

    <hr />
    <hr />

    <div>
      <RouterView></RouterView>
      <hr />
      <RouterView name="footer"></RouterView>
    </div>
  </div>
</template>
