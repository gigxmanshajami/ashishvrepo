import { StyleSheet } from 'react-native';
import GStyle from './Global'; // Adjust the path as necessary

const styles = StyleSheet.create({
//   container: {
//     ...GStyle.container,
//   },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    backgroundColor: '#222',
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: 'white',
  },
  micIcon: {
    marginLeft: 10,
  },
  mainButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  mainButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: 'blue',
    borderWidth: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: 'blue',
  },
  unselectedButton: {
    backgroundColor: 'transparent',
  },
  mainButtonText: {
    color: 'white',
  },
  categoryButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 5,
  },
  selectedCategoryButton: {
    backgroundColor: 'gray',
  },
  unselectedCategoryButton: {
    backgroundColor: 'transparent',
  },
  categoryIcon: {
    marginRight: 5,
  },
  categoryButtonText: {
    color: 'white',
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeMore: {
    color: 'blue',
  },
  imageCardList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageCard: {
    flexDirection: 'column',
    width: '30%',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  imageCardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    color: 'white',
  },
  profileFollowers: {
    color: 'gray',
  },
  brandOverlay: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    padding: 5,
  },
  brandCount: {
    color: 'white',
  },
  brandName: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  transparentOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    padding: 5,
  },
});

export default styles;
