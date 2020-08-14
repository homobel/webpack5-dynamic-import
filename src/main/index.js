import a from 'app/widgets/a';
import b from 'app/widgets/b';
import c from 'app/widgets/c';

console.log('\nstatic import\n');

a();
b();
c();

console.log('\ndynamic import\n');

const load = id => import(/* webpackMode: "eager" */ `app/widgets/${id}`);

load('a').then(ad => ad.default())

    .then(() => load('b'))
    .then(bd => bd.default())

    .then(() => load('c'))
    .then(cd => cd.default())

    .catch(err => console.log(err));
