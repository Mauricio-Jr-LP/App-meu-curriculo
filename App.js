import React, {useState} from 'react';
import { View, Text, StatusBar, StyleSheet, Dimensions, Image, width, height, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import Modal from './Modal.js';
//import {db} from './firebase.js';

function HomeScreen({navigation, route}) 
{
  const [images, setImages] = useState([
    {
      img: require('./resources/github.png'),
      width: 75,
      height: 75,
      ratio: 75,
      website: 'https://github.com/Mauricio-Jr-LP'
    },
    {
      img: require('./resources/insta.png'),
      width: 75,
      height: 75,
      ratio: 75,
      website: 'https://www.instagram.com/mauricio_junior_lp/'
    },
    {
      img: require('./resources/whats.png'),
      width: 75,
      height: 75,
      ratio: 75,
      website: 'https://api.whatsapp.com/send?phone=5575983525355'
    }
  ])

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    
    let windowWidthN = Dimensions.get('window').width;
    
    setWindowWidth(windowWidthN - 30 - 40);

    let newImages = images.filter(function(val){
      let w = Image.resolveAssetSource(val.img).width;
      let h = Image.resolveAssetSource(val.img).height;

      val.width = width;
      val.height = height;
      val.ratio = h/w;

      return val;
    })

    setImages(newImages);
  }, [])

  const abrirNavegador = async (website) => 
  {
    let result = await WebBrowser.openBrowserAsync(website);
  }

  let widthWindow = Dimensions.get('window').width - 50 ;
  return (
    <View style={style.fundoView}>
      <ScrollView contentContainerStyle = {{padding: 20}} style = {style.container}>
        <Text style = {style.textHeader}>Mauricio Júnior</Text>

        <Image style = {{width: widthWindow, height: widthWindow, marginTop:20,  borderTopLeftRadius: 50, borderTopRightRadius: 50,
          borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
            source = {{ uri: 'https://avatars.githubusercontent.com/u/51757509?s=400&u=1dbe18dad163686ca6fab11072ec1ae7e75a1a39&v=4'}} 
        />

        <View style = {{paddingLeft: 50, flexDirection: 'row'}}>
          {
            images.map(function(val)
            {
              return(
                <View style = {style.parentImage}>
                  <TouchableOpacity onPress = {() => abrirNavegador(val.website)}>
                    <Image style = {{width: 75, height: 75}} source = {val.img}/>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </View>
        <Text style = {{fontSize: 20, textAlign: 'center', color: 'white',marginTop:20, paddingBottom: 10, paddingLeft: 10}}>
          Conhecimento basico em
        </Text>
        <View style = {{paddingLeft: '15%', flexDirection: 'row'}}>
          <View>
            <Image style = {{width: 50, height: 50, marginTop:20,  borderTopLeftRadius: 50, borderTopRightRadius: 50,
              borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
              source = {{ uri: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png'}} 
            />
            <Image style = {{width: 50, height: 50, marginTop:20,  borderTopLeftRadius: 5, borderTopRightRadius: 5,
              borderBottomLeftRadius: 5, borderBottomRightRadius: 5}} 
              source = {{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png'}} 
            />
          </View>
          <View style = {{paddingLeft: 10}}>
            <Image style = {{width: 50, height: 50, marginTop:20,  borderTopLeftRadius: 50, borderTopRightRadius: 50,
              borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
              source = {{ uri: 'https://media.vlpt.us/images/soom/post/0779a3ae-4f92-4f0b-8189-8578b39540dd/html5-logo-for-web-development-1200x667.webp'}} 
            />
            <Image style = {{width: 50, height: 50, marginTop:20,  borderTopLeftRadius: 50, borderTopRightRadius: 50,
              borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
              source = {{ uri: 'https://media.vlpt.us/images/soom/post/a31ef32a-be26-44e5-b345-9ea43d05d06d/css.png'}} 
            />
          </View>
          <View style = {{paddingLeft: 10}}>
            <Image style = {{width: 50, height: 50, marginTop:20,  borderTopLeftRadius: 50, borderTopRightRadius: 50,
              borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
              source = {{ uri: 'https://img2.gratispng.com/20180410/qgw/kisspng-node-js-javascript-database-mongodb-native-5acd4ebf6b4b75.3634484415234044794395.jpg'}} 
            />
            <Image style = {{width: 50, height: 50, marginTop:20,  borderTopLeftRadius: 50, borderTopRightRadius: 50,
              borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
              source = {{ uri: 'https://miro.medium.com/max/700/1*xDi2csEAWxu95IEkaNdFUQ.png'}} 
            />
          </View>
          <View style = {{paddingLeft: 10}}>
            <Image style = {{width: 50, height: 50, marginTop:20,  borderTopLeftRadius: 5, borderTopRightRadius: 5,
              borderBottomLeftRadius: 5, borderBottomRightRadius: 5}} 
              source = {{ uri: 'https://avatars.githubusercontent.com/u/14101776?s=200&v=4'}} 
            />
            <Image style = {{width: 50, height: 50, marginTop:20,  borderTopLeftRadius: 50, borderTopRightRadius: 50,
              borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
              source = {{ uri: 'https://jafapps.com.br/wp-content/uploads/2019/01/jafapps_.png'}} 
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function SobreScreen({navigation}) 
{
  const [showModal, setModal] = useState(false);
  
  const abrirModalContato = () => 
  {
    setModal(!showModal);
  }
  
  let widthWindow = Dimensions.get('window').width - 30 - 40;
  return (
    <View style={style.fundoView}>
      {
        (showModal)?
          <Modal showModal = {showModal} setModal = {setModal}/>
        :
        <View></View>
      }

      <View style = {{flex:1, padding: 10}}> 
        <ScrollView contentContainerStyle = {{paddingLeft: 20}} style = {style.container}>
            <Text style = {{...style.textHeader, textAlign: 'left'}}>Sobre</Text>
            <View style = {{flexDirection: 'row', paddingRig: 10}}>
              <Image style = {{width: 150, height: 150, marginTop:20,  borderTopLeftRadius: 50, borderTopRightRadius: 50,
                borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
                source = {{ uri: 'https://avatars.githubusercontent.com/u/51757509?s=400&u=1dbe18dad163686ca6fab11072ec1ae7e75a1a39&v=4'}} 
              />
            <Text style = {{fontSize: 20, textAlignVertical: 'center', color: 'white', paddingBottom: 10, paddingLeft: 10}}>
              Mauricio Júnior
            </Text>
          </View>
          <Text  style = {{fontSize: 15,paddingTop: 5, paddingBottom: 10, color: 'white'}}>
            What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five           centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
          </Text>

          <TouchableOpacity onPress={() => abrirModalContato()} style = {{...style.btnNavigation, justfyContent:'center'}}>
            <Text style = {{color: 'white'}}>Entrar em contato</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

function PortifolioScreen({navigation, route}) 
{
  const [images, setImages] = useState([
    {
      img: require('./resources/mesaTrab.jpeg'),
      width: 0,
      height: 0,
      ratio: 0,
      website: 'https://github.com/Mauricio-Jr-LP?tab=repositories'
    },
    {
      img: require('./resources/mesaTrab2.jpg'),
      width: 0,
      height: 0,
      ratio: 0,
      website: 'https://cursos.dankicode.com'
    }
  ])

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    
    let windowWidthN = Dimensions.get('window').width;
    
    setWindowWidth(windowWidthN - 30 - 40);

    let newImages = images.filter(function(val){
      let w = Image.resolveAssetSource(val.img).width;
      let h = Image.resolveAssetSource(val.img).height;

      val.width = width;
      val.height = height;
      val.ratio = h/w;

      return val;
    })

    setImages(newImages);
  }, [])

  const abrirNavegador = async (website) => 
  {
    let result = await WebBrowser.openBrowserAsync(website);
  }

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: '#0D1418'}}>
      <ScrollView contentContainerStyle = {{padding: 20}} style = {style.container}>
        <Text style = {style.textHeader}>Projetos mais recentes!</Text>

        {
          images.map(function(val)
          {
            return(
              <View style = {style.parentImage}>
                <Image style = {{width: '100%', height: 200, resizeMode:'stretch'}} source = {val.img}/>

                <TouchableOpacity onPress = {() => abrirNavegador(val.website)} style = {style.btnAbrirNavegador}>
                  <Text style = {{textAlign: 'center', color: 'white'}}>Abrir no navegador</Text>
                </TouchableOpacity>
              </View>
            )
          })
        }

      </ScrollView>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App()
{
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;            
            if (route.name === 'Home') 
            {
              iconName = focused
                ? 'home'
                : 'home';
            } 
            else if (route.name == 'Portifolio') 
            {
              iconName = focused 
              ? 'list' 
              : 'list';
            }            
            else if (route.nome == 'Sobre')
            {
              iconName = focused 
              ? 'contact'
              : 'contact';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          style: 
          {
            borderTopColor: 'white',
            shadowRadius: 50,
            shadowColor: 'white',
            backgroundColor: '#0D1418'
          }
        }}
        
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
        <Tab.Screen name="Portifolio" component={PortifolioScreen} options={{ tabBarBadge: 2}}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const style = StyleSheet.create ({
  container:
  {
    alignContent: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#0D1418'
  },
  fundoView:
  {
    paddingTop: 15, 
    flex: 1, 
    backgroundColor: '#0D1418'
  },
  textHeader:
  {
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  },
  btnNavigation:
  {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#5f5380',
    padding: 20,
    marginTop: 15,
    flexDirection: 'row'
  },
  parentImage:
  {
    marginTop: 15
  },
  btnAbrirNavegador:
  {
    padding: 10,
    backgroundColor: '#5f5380'
  },
  ftPerfil:
  {
    width: 100,
    height: 100,
    borderRadius: 30
  },
  modalParent:
  {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1
  },
  boxModal:
  {
    backgroundColor: 'white',
    height: 370,
    width: '100%',
    position: 'absolute',
    left: 0,
    top: '50%',
    marginTop: -185,
    padding: 10
  },
  ftRedes:
  {
    width: 75, 
    height: 75,
    marginTop:20,  
    borderTopLeftRadius: 25, 
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 25
  }
})