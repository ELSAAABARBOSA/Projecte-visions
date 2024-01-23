
    <template>
      <footer class="mt-5">
        <ul class="list-group list-group-flush list-group-horizontal text-center mb-0">
          <li>
            <router-link to="/" aria-current="page">Inici</router-link>
          </li>
          <br>
          <li>
            <router-link to="/nosaltres">Nosaltres</router-link>
          </li>
          <br>
          <li>
            <router-link to="/fotos">Fotos</router-link>
          </li>
        </ul>
        <div class="text-black-50 text-center">Vision &copy; 2023</div>
      </footer>
    </template>
    
    <style scoped>
        footer {
            width:100%;
        }
        .text-center{
            margin-top: -0.5em;
            margin-bottom: 0.5em;
        }
        .list-group{
            justify-content: center;
        }
        .list-group-item{
            border:none;
        }
        .router-link {
            text-decoration: none;
        }
    @media (min-width: 768px) {
        footer{
            position: absolute;
        }
    }
    </style>
    <script>
    </script>