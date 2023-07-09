import { withCreate } from 'radipan';

const Icon = ({
  as = 'span',
  name = 'menu',
  children = undefined,
  ...props
} = {}) => {
  return withCreate(as).create(
    {
      ...props,
      css: {
        display: 'inline-block',
        width: '1em',
        height: '1em',
        backgroundColor: 'currentColor',
        mask: 'no-repeat center / 100%',
        maskImage: 'var(--svg)',
        ...(icons[name] || iconAliases[name] || {}),
      },
    },
    children
  );
};

const icons = {
  // https://icon-sets.iconify.design/ion/
  // https://api.iconify.design/ion.css?icons={iconName}

  // alert-sharp
  alert: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-miterlimit='10' stroke-width='32' d='m240 80l8 240h16l8-240h-32zm0 320h32v32h-32z'/%3E%3C/svg%3E")`,
  },
  // alert-circle-sharp
  'alert-circle': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' d='M240 304h32l6-160h-44l6 160z'/%3E%3Cpath fill='black' d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48Zm20 319.91h-40v-40h40ZM272 304h-32l-6-160h44Z'/%3E%3C/svg%3E")`,
  },
  // arrow-up-sharp
  'arrow-up': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='m112 244l144-144l144 144M256 120v292'/%3E%3C/svg%3E")`,
  },
  // arrow-down-sharp
  'arrow-down': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='m112 268l144 144l144-144M256 392V100'/%3E%3C/svg%3E")`,
  },
  // arrow-back-sharp
  'arrow-left': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292'/%3E%3C/svg%3E")`,
  },
  // arrow-forward-sharp
  'arrow-right': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='m268 112l144 144l-144 144m124-144H100'/%3E%3C/svg%3E")`,
  },
  // ban-sharp
  ban: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61ZM432 256a175.09 175.09 0 0 1-35.8 106.26L149.74 115.8A175.09 175.09 0 0 1 256 80c97.05 0 176 79 176 176Zm-352 0a175.09 175.09 0 0 1 35.8-106.26L362.26 396.2A175.09 175.09 0 0 1 256 432c-97 0-176-78.95-176-176Z'/%3E%3C/svg%3E")`,
  },
  // backspace-sharp
  backspace: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M144 96L32 256l112 160h304V96Zm215.3 226.34L336.67 345l-65-65l-65 65L184 322.34l65-65l-65-65l22.63-22.63l65 65l65-65l22.63 22.63l-65 65Z'/%3E%3C/svg%3E")`,
  },
  // caret-back-sharp
  'caret-left': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M368 64L144 256l224 192V64z'/%3E%3C/svg%3E")`,
  },
  // caret-forward-sharp
  'caret-right': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='m144 448l224-192L144 64v384z'/%3E%3C/svg%3E")`,
  },
  // caret-up-sharp
  'caret-up': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M448 368L256 144L64 368h384z'/%3E%3C/svg%3E")`,
  },
  // caret-down-sharp
  'caret-down': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='m64 144l192 224l192-224H64z'/%3E%3C/svg%3E")`,
  },
  // checkbox-sharp
  checkbox: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M48 48v416h416V48Zm170 312.38l-80.6-89.57l23.79-21.41l56 62.22L350 153.46L374.54 174Z'/%3E%3C/svg%3E")`,
  },
  // checkmark-sharp
  checkmark: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-miterlimit='10' stroke-width='44' d='M416 128L192 384l-96-96'/%3E%3C/svg%3E")`,
  },
  // checkmark-done-sharp
  'checkmark-double': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-miterlimit='10' stroke-width='44' d='M465 127L241 384l-92-92m-9 93l-93-93m316-165L236 273'/%3E%3C/svg%3E")`,
  },
  // checkmark-circle-sharp
  'checkmark-circle': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48Zm-38 312.38l-80.6-89.57l23.79-21.41l56 62.22L350 153.46L374.54 174Z'/%3E%3C/svg%3E")`,
  },
  // checkmark-done-circle-sharp
  'checkmark-double-circle': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48Zm48.19 121.42l24.1 21.06l-73.61 84.1l-24.1-23.06ZM191.93 342.63L121.37 272L144 249.37L214.57 320Zm65 .79L185.55 272l22.64-22.62l47.16 47.21l111.13-127.17l24.1 21.06Z'/%3E%3C/svg%3E")`,
  },
  // chevron-up-sharp
  'chevron-up': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='m112 328l144-144l144 144'/%3E%3C/svg%3E")`,
  },
  // chevron-down-sharp
  'chevron-down': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='m112 184l144 144l144-144'/%3E%3C/svg%3E")`,
  },
  // chevron-back-sharp
  'chevron-left': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M328 112L184 256l144 144'/%3E%3C/svg%3E")`,
  },
  // chevron-forward-sharp
  'chevron-right': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='m184 112l144 144l-144 144'/%3E%3C/svg%3E")`,
  },
  // chevron-collapse-sharp
  'chevron-collapse': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M102.145 108.514L256 241.855l153.855-133.341l-31.437-36.273L256 178.337L133.582 72.241l-31.437 36.273zm0 294.972L256 270.145l153.855 133.341l-31.437 36.273L256 333.663L133.582 439.759l-31.437-36.273z'/%3E%3C/svg%3E")`,
  },
  // chevron-expand-sharp
  'chevron-expand': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-width='48' d='m136 208l120-104l120 104m-240 96l120 104l120-104'/%3E%3C/svg%3E")`,
  },
  // close-sharp
  close: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M400 145.49L366.51 112L256 222.51L145.49 112L112 145.49L222.51 256L112 366.51L145.49 400L256 289.49L366.51 400L400 366.51L289.49 256L400 145.49z'/%3E%3C/svg%3E")`,
  },
  // close-circle-sharp
  'close-circle': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48Zm86.63 272L320 342.63l-64-64l-64 64L169.37 320l64-64l-64-64L192 169.37l64 64l64-64L342.63 192l-64 64Z'/%3E%3C/svg%3E")`,
  },
  // ellipsis-horizontal-sharp
  'ellipsis-horizontal': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Ccircle cx='256' cy='256' r='48' fill='black'/%3E%3Ccircle cx='416' cy='256' r='48' fill='black'/%3E%3Ccircle cx='96' cy='256' r='48' fill='black'/%3E%3C/svg%3E")`,
  },
  // ellipsis-vertical-sharp
  'ellipsis-vertical': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Ccircle cx='256' cy='256' r='48' fill='black'/%3E%3Ccircle cx='256' cy='416' r='48' fill='black'/%3E%3Ccircle cx='256' cy='96' r='48' fill='black'/%3E%3C/svg%3E")`,
  },
  // ellipsis-horizontal-circle-sharp
  'ellipsis-horizontal-circle': {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48Zm-90 234a26 26 0 1 1 26-26a26 26 0 0 1-26 26Zm90 0a26 26 0 1 1 26-26a26 26 0 0 1-26 26Zm90 0a26 26 0 1 1 26-26a26 26 0 0 1-26 26Z'/%3E%3C/svg%3E")`,
  },
  // help-sharp
  help: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-miterlimit='10' stroke-width='40' d='M160 164c0-10 1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 290.36 248 316'/%3E%3Crect width='56' height='56' x='220' y='368' fill='black' rx='3.5' ry='3.5'/%3E%3C/svg%3E")`,
  },
  // information-sharp
  information: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-miterlimit='10' stroke-width='40' d='M196 220h64v172m-73 4h138'/%3E%3Cpath fill='black' d='M256 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z'/%3E%3C/svg%3E")`,
  },
  // menu-sharp
  menu: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M64 384h384v-42.67H64Zm0-106.67h384v-42.66H64ZM64 128v42.67h384V128Z'/%3E%3C/svg%3E")`,
  },
  // link-sharp
  link: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-linejoin='round' stroke-width='48' d='M200.66 352H144a96 96 0 0 1 0-192h55.41m113.18 0H368a96 96 0 0 1 0 192h-56.66m-142.27-96h175.86'/%3E%3C/svg%3E")`,
  },
  // unlink-sharp
  unlink: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-linejoin='round' stroke-width='48' d='M200.66 352H144a96 96 0 0 1 0-192h55.41m113.18 0H368a96 96 0 0 1 0 192h-56.66'/%3E%3C/svg%3E")`,
  },
  // move-sharp
  move: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-miterlimit='10' stroke-width='32' d='m176 112l80-80l80 80m-80.02-80l.02 448m-80-80l80 80l80-80m64-224l80 80l-80 80M112 176l-80 80l80 80m-80-80h448'/%3E%3C/svg%3E")`,
  },
  // person-sharp
  person: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M256 256a112 112 0 1 0-112-112a112 112 0 0 0 112 112Zm0 32c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128Z'/%3E%3C/svg%3E")`,
  },
  // pause-sharp
  pause: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M224 432h-80V80h80Zm144 0h-80V80h80Z'/%3E%3C/svg%3E")`,
  },
  // refresh-sharp
  refresh: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-miterlimit='10' stroke-width='32' d='M320 146s24.36-12-64-12a160 160 0 1 0 160 160'/%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-miterlimit='10' stroke-width='32' d='m256 58l80 80l-80 80'/%3E%3C/svg%3E")`,
  },
  // reload-sharp
  reload: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-miterlimit='10' stroke-width='32' d='m400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128'/%3E%3Cpath fill='black' d='M464 68.45V220a4 4 0 0 1-4 4H308.45a4 4 0 0 1-2.83-6.83L457.17 65.62a4 4 0 0 1 6.83 2.83Z'/%3E%3C/svg%3E")`,
  },
  // add-sharp
  add: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-linejoin='round' stroke-width='32' d='M256 112v288m144-144H112'/%3E%3C/svg%3E")`,
  },
  // remove-sharp
  remove: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='none' stroke='black' stroke-linecap='square' stroke-linejoin='round' stroke-width='32' d='M400 256H112'/%3E%3C/svg%3E")`,
  },
  // search-sharp
  search: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M464 428L339.92 303.9a160.48 160.48 0 0 0 30.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0 0 94.58-30.72L428 464ZM209.32 319.69a110.38 110.38 0 1 1 110.37-110.37a110.5 110.5 0 0 1-110.37 110.37Z'/%3E%3C/svg%3E")`,
  },
  // warning-sharp
  warning: {
    '--svg': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='black' d='M479 447.77L268.43 56.64a8 8 0 0 0-14.09 0L43.73 447.77a8 8 0 0 0 7.05 11.79H472a8 8 0 0 0 7-11.79Zm-197.62-36.29h-40v-40h40Zm-4-63.92h-32l-6-160h44Z'/%3E%3C/svg%3E")`,
  },
};

const iconAliases = {
  arrow: icons['arrow-down'],
  'arrow-back': icons['arrow-left'],
  'arrow-forward': icons['arrow-right'],
  check: icons['checkmark'],
  'check-double': icons['checkmark-double'],
  'checkmark-done': icons['checkmark-double'],
  'check-done': icons['checkmark-double'],
  'check-circle': icons['checkmark-circle'],
  'checkmark-done-circle': icons['checkmark-double-circle'],
  'check-double-circle': icons['checkmark-double-circle'],
  'check-done-circle': icons['checkmark-double-circle'],
  'caret-back': icons['caret-left'],
  'caret-forward': icons['caret-right'],
  chevron: icons['chevron-down'],
  'chevron-back': icons['chevron-left'],
  'chevron-forward': icons['chevron-right'],
  ellipsis: icons['ellipsis-horizontal'],
  'ellipsis-circle': icons['ellipsis-horizontal-circle'],
  i: icons['information'],
  info: icons['information'],
  plus: icons['add'],
  minus: icons['remove'],
  'question-mark': icons['help'],
  'warning-circle': icons['alert-circle'],
  x: icons['close'],
  'x-circle': icons['close-circle'],
  '+': icons['add'],
  '-': icons['remove'],
  '!': icons['alert'],
  '?': icons['help'],
};

export default withCreate(Icon);
