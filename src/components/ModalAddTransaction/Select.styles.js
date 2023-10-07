import dropDownArrow from '../../assets/icons/dropDown.svg';

export const selectStyles = {
  container: provided => ({
    ...provided,
    width: '100%',
    fontFamily: 'Circe',
    color: '#dcdcdf',
    fontSize: '18px',
    fontWeight: '400',
  }),
  control: () => ({
    display: 'flex',
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid #dcdcdf',
    outline: 'none',
    borderRadius: '4px',
    padding: '10px',
    maxHeight: 'none',
    color: '#dcdcdf',
    overflow: 'hidden',
  }),
  option: (provided, state) => ({
    ...provided,
    width: '100%',
    backgroundColor: state.isSelected ? 'rgb(255, 255, 255)' : 'transparent',
    color: state.isSelected ? '#ff6596' : 'black',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    paddingInline: '20px',
    paddingBlock: '11px',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: 'rgb(255, 255, 255)',
      color: '#ff6596',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorContainer: () => ({
    color: 'black',
  }),
  menu: provided => ({
    ...provided,
    width: '100%',
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(245, 245, 245, 0.5)',
    backdropFilter: 'blur(5px)',
    borderRadius: '20px',
    maxHeight: 'none',
    color: '#dcdcdf',
    overflow: 'hidden',
    minHeight: '350px',
    zIndex: 2,
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  }),

  menuList: base => ({
    ...base,
    border: 'none',
    outline: 'none',
    minHeight: '350px',
    '::-webkit-scrollbar': {
      width: '4px',
      height: '0px',
    },
    '::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#888',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  }),

  placeholder: provided => ({
    ...provided,
    color: '#dcdcdf',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    backgroundImage: `url(${dropDownArrow})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '20px',
    height: '20px',
  }),
};

export default selectStyles;
