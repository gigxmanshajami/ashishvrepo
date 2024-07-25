/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from './Colours';

const PMRef = [{
  key: 0,
  val: 0,
}, {
  key: '0_1',
  val: 1,
}, {
  key: 1,
  val: 5,
}, {
  key: '1_5',
  val: 8,
}, {
  key: 2,
  val: 10,
}, {
  key: 3,
  val: 15,
}, {
  key: 4,
  val: 20,
}, {
  key: 5,
  val: 25,
}];

const { height, width } = Dimensions.get('screen');

// ------------------------------------------
// const colVal = 450;
const colSmVal = 768;
const colMdVal = 991;
const colLgVal = 1199;
// ------------------------------------------

// ======================================= position Styles =========================
export const setZindex = (givenIndex) => {
  return {
    zIndex: givenIndex,
  };
};
// ======================================= position Styles =========================

export const GStyle = StyleSheet.create({
//--------------------------------------------------customize by Ashish Vishwakarma
sectionContainer: {
  // marginVertical: 10,
  padding: 10,
  backgroundColor: Colors.primary, 
  
},

// Header of each section containing the title and see more button
sectionHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
},

// Title of the section
sectionTitle: {
  fontSize: 14,
  fontWeight: 'bold',
  color: Colors.white, // Replace with your desired text color
},

// // 'See More' text in the section header
sectionSeeMore: {
  fontSize: 14,
  color: Colors.white, // Replace with your desired color
},

// // Container for the images
imageContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  // marginRight:10
},

// // Style for each image
image: {
  width: '100%', // Adjust based on your layout needs
  height: 150, // Adjust based on your layout needs
  borderRadius: 10,
  // marginRight: 10, 
  // marginLeft:10
},

// // Footer of each image containing profile info
imageFooter: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 5,
  position:'absolute',
  bottom:0

},

// // Profile image style
profileImage: {
  width: 30,
  height: 30,
  borderRadius: 15,
  marginRight: 10,
},

// // Profile name text style
profileName: {
  fontSize: 8,
  fontWeight: 'bold',
  color: Colors.white, // Replace with your desired text color
},

// Profile followers text style
profileFollowers: {
  fontSize: 6,
  color: Colors.white, // Replace with your desired color
},


    
  // ======================================= position Styles =========================
  positionRelative: {
    position: 'relative',
  },
  positionAbsolute: {
    position: 'absolute',
  },
  // ======================================= position Styles =========================
  // ======================================= Flex Styles =========================
  container: {
    flex: 1,
  },
  dFlex: {
    flex: 1,
  },
  dFlexDirCol: {
    flexDirection: 'column',
  },
  dFlexDirRow: {
    flexDirection: 'row',
  },
  dFlexJC_C: {
    justifyContent: 'center',
  },
  dFlexJC_FS: {
    justifyContent: 'flex-start',
  },
  dFlexJC_FE: {
    justifyContent: 'flex-end',
  },
  dFlexJC_SB: {
    justifyContent: 'space-between',
  },
  dFlexJC_SA: {
    justifyContent: 'space-around',
  },
  dFlexAI_C: {
    alignItems: 'center',
  },
  dFlexAI_FS: {
    alignItems: 'flex-start',
  },
  dFlexAI_FE: {
    alignItems: 'flex-end',
  },
  dFlexAI_SB: {
    alignItems: 'space-between',
  },
  dFlexAI_SA: {
    alignItems: 'space-around',
  },
  dFlex_Wrap: {
    flexWrap: 'wrap',
  },
  // ======================================= Flex Styles =========================

  // ======================================= Text Styles =========================
  tCenter: {
    textAlign: 'center',
  },
  // ======================================= Text Styles =========================

});
// ======================================= heights & width Styles =========================
[...Array(10)].forEach((value, index) => {
  GStyle[`h${(index + 1) * 10}`] = { height: `${(index + 1) * 10}%` };
  GStyle[`w${(index + 1) * 10}`] = { width: `${(index + 1) * 10}%` };
});
// ======================================= heights & width Styles =========================

// ======================================= fonts sizes =========================
// ----------------- width Relative Sizing ------------------

export const setWRFontSize = (value) => {
  return { fontSize: value * width };
};
// ----------------- width Relative Sizing ------------------
[...Array(10)].forEach((value, index) => {
  GStyle[`mh${9 - index}`] = { fontSize: (index + 1) * 5 };
});
GStyle.mh625 = {
  fontSize: 16.25,
};
GStyle.mh65 = {
  fontSize: 17.5,
};
GStyle.mh675 = {
  fontSize: 18.75,
};
GStyle.mh725 = {
  fontSize: 11.25,
};
GStyle.mh75 = {
  fontSize: 12.5,
};
GStyle.mh775 = {
  fontSize: 13.75,
};
// ======================================= fonts sizes =========================



// ======================================= fonts weight =========================
[...Array(8)].forEach((value, index) => {
  GStyle[`tw_${(index + 2) * 100}`] = { fontWeight: `${(index + 2) * 100}` };
});
// ======================================= fonts weight =========================


// ================================= paddings =======================
const paddingLabels = [
  { label: 'p', keys: ['padding'] },
  { label: 'px', keys: ['paddingLeft', 'paddingRight'] },
  { label: 'py', keys: ['paddingTop', 'paddingBottom'] },
  { label: 'ps', keys: ['paddingStart'] },
  { label: 'pe', keys: ['paddingEnd'] },
  { label: 'pt', keys: ['paddingTop'] },
  { label: 'pb', keys: ['paddingBottom'] },
];
paddingLabels.forEach((element) => {
  const lName = element.label;
  const keys = element.keys;

  PMRef.forEach((value) => {
    let gsObj = {};
    keys.forEach((key) => {
      gsObj[key] = value.val;
    });
    GStyle[`${lName}${value.key}`] = gsObj;
  });

});
// ================================= paddings =======================

// ================================= margins =======================
const marginLabels = [
  { label: 'm', keys: ['margin'] },
  { label: 'mx', keys: ['marginLeft', 'marginRight'] },
  { label: 'my', keys: ['marginTop', 'marginBottom'] },
  { label: 'ms', keys: ['marginStart'] },
  { label: 'me', keys: ['marginEnd'] },
  { label: 'mt', keys: ['marginTop'] },
  { label: 'mb', keys: ['marginBottom'] },
];

marginLabels.forEach((element) => {
  const lName = element.label;
  const keys = element.keys;

  PMRef.forEach((value) => {
    let gsObj = {};
    keys.forEach((key) => {
      gsObj[key] = value.val;
    });
    GStyle[`${lName}${value.key}`] = gsObj;
  });

});


// ================================= margins =======================

// ================================= setting Height & Width =======================
export const setHW = (h, w) => {
  return { height: h, width: w };
};

export const setColW = (col, sm, md, lg) => {

  if (lg && width >= colLgVal) {
    return { width: width / lg };
  }

  if (md && width >= colMdVal) {
    return { width: width / md };
  }

  if (sm && width >= colSmVal) {
    return { width: width / sm };
  }

  return { width: width / col };


};

export const setColWRH = (col, sm, md, lg) => {
  if (lg && width >= colLgVal) {
    return { height: width / lg };
  }

  if (md && width >= colMdVal) {
    return { height: width / md };
  }

  if (sm && width >= colSmVal) {
    return { height: width / sm };
  }

  return { height: width / col };
};

export const setColH = (col, sm, md, lg) => {
  if (lg && width >= colLgVal) {
    return { height: height / lg };
  }

  if (md && width >= colMdVal) {
    return { height: height / md };
  }

  if (sm && width >= colSmVal) {
    return { height: height / sm };
  }

  return { height: height / col };
};
// ================================= setting Height & Width =======================

// ================================= setting BorderRadius =======================
export const setRadius = (l, r, t, b) => {
  if (!r) {
    return { borderRadius: l };
  } else if (!t) {
    return { borderTopLeftRadius: l, borderTopRightRadius: r, borderBottomLeftRadius: l, borderBottomRightRadius: r };

  } else {

    return { borderTopLeftRadius: l, borderTopRightRadius: r, borderBottomLeftRadius: b, borderBottomRightRadius: t };
  }
};
// ================================= setting BorderRadius =======================

// ================================= Elevation =======================
export const elevate = (elevateBy, givenColour) => {
  return { elevation: elevateBy, shadowColor: givenColour ? givenColour : backgroundColor.semiTranparent };
};
// ================================= Elevation =======================
