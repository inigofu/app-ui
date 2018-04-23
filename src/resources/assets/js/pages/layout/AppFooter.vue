<template>

    <footer class="footer">
        <div class="content has-text-centered">
            <p class="level">
                <span class="level-item">
                    <strong class="has-margin-right-small">
                        {{ meta.appName }} v{{ meta.version }}
                    </strong>
                    
                </span>
            </p>
            
        </div>
    </footer>

</template>

<script>

import { mapState } from 'vuex';
import fontawesome from '@fortawesome/fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-solid/shakable.es';
import { faGithub } from '@fortawesome/fontawesome-free-brands/shakable.es';

fontawesome.library.add(faHeart, faGithub);

export default {
    name: 'AppFooter',

    computed: {
        ...mapState(['meta']),
    },
};

</script>

<style>

    .footer {
        margin-left: 180px;
    }

    @media screen and (max-width: 1023px) {
        .footer {
            margin-left: 0;
        }
    }

</style>
