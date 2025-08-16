import { Personagens } from "./Personagens.js";
import { Monstro }  from "./Monstro.js";

const heroi = new Personagens("Arthas", "Guerreiro", 100, 20);
const monstro = new Monstro("Orc", 80, 15);

console.log("Status inical:");
console.log(heroi.getVida());
console.log(monstro.getVida());

heroi.atacar(monstro);
console.log("\nApós ataque do herói:");
console.log(heroi.getVida());
console.log(monstro.getVida());

monstro.atacar(heroi);
console.log("\nApós ataque do monstro:");
console.log(heroi.getVida());
console.log(monstro.getVida());

heroi.curar(10);
console.log("\nHerói se cura:");
console.log(heroi.getVida());
console.log(monstro.getVida());



console.log(`
/\
||
||
||
||                                               ~-----~
||                                            /===--  ---~~~
||                   ;'                 /==~- --   -    ---~~~
||                (/ ('              /=----         ~~_  --(  '
||             ' / ;'             /=----               \__~
'                ~==_=~          '('             ~-~~      ~~~~        ~~~--\~'
\\                (c_\_        .i.             /~--    ~~~--   -~     (     '
 "\               (}| /       / : \           / ~~------~     ~~\   (
\ '               ||/ \      |===|          /~/             ~~~ \ \(
"~\              ~~\  )~.~_ >._.< _~-~     |'_          ~~-~     )\
'-~                 {  /  ) \___/ (   \   |' _       ~~         
\ -~\                -<__/  -   -  L~ -;   \\    \ _ _/
 ~~=\                  {    :    }\ ,\    ||   _ :(
\  ~~=\__                \ _/ \_ /  )  } _//   ( |'
    , ~\--~=\           \     /  / _/ / '    (   '
\'    } ~ ~~ -~=\   _~_  / \ / \ )^ ( // :_  / '
|    ,          _~-'   '~~__-_  / - |/     \ (
\  ,_--_     _/              \_'---', -~ .   \
)/      /\ / /\   ,~,         \__ _}     \_  "~_
,      { ( _ )'} ~ - \_    ~\  (-:-)       "\   ~ 
/'' ''  )~ \~_ ~\   )->  \ :|    _,       " 
(\  _/)''} | \~_ ~  /~(   | :)   /          }
<''  >;,,/  )= \~__ {{{ '  \ =(  ,   ,       ;
{o_o }_/     |v  '~__  _    )-v|  "  :       ,"
{/"\_)       {_/'  \~__ ~\_ \\_} '  {        /~\
,/!          '_/    '~__ _-~ \_' :  '      ,"  ~ 
(''                  /,'~___~    | /     ,"  \ ~' 
'/, )                 (-)  '~____~";     ,"     , }
/,')                    / \         /  ,~-"       '~'
(  ''/                     / ( '       /  /          '~'
~ ~  ,, /) ,                 (/( \)      ( -)          /~'
(  ~~ )  ~}                   '  \)'     _/ /           ~'
{ |) /,--.(  }'                    '     (  /          /~'
( ~ ( c|~~| }   )                        '/:\         ,'
~ )/'') )) '|),                          (/ | \)                 -sjm
('' (-~(( '~''  )                        ' (/ '
'~'    )'')                              '
' ' 






`)
