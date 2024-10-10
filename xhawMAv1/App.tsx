import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Define types for the course structure
interface Course {
  title: string;
  fees: number;
}

interface Course2{
    des: string;
    title: string;
    fees: number;
}

// Welcome Screen Component
const WelcomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/logo.jpg')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.heading}>Empowering the Nation</Text>
        </View>
        <Text style={styles.subHeading}>Welcome to ETN</Text>
        <Text style={styles.bodyText}>
          At Empowering the Nation, we believe in transforming lives through education and skill development.
          Our training programs are designed to up-skill domestic workers and gardeners, equipping them with
          competencies that increase their marketability and earning potential.
        </Text>
        <Text style={styles.subHeading}>Why Choose Our Training?</Text>
        <Text style={styles.bodyText}>
          Enhance Employability: Our courses provide practical skills for domestic workers and gardeners, making
          them more attractive to employers. With advanced techniques in areas like home management, landscaping,
          and sustainable practices, our trainees stand out in a competitive job market.
        </Text>
        <Text style={styles.bodyText}>Founder of Empowering the Nation: Precious Radebe</Text>
        <Image
            source={require('./assets/ceo.jpg')}
            style={styles.ceo}
            //resizeMode="contain"
          />
      </View>
    </ScrollView>
  );
};

// About Us Screen Component
const AboutScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/logo.jpg')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.heading}>Empowering the Nation</Text>
        </View>
        <Text style={styles.subHeading}>About us</Text>
        <Text style={styles.bodyText}>
          Our goal at Empowering the Nation is to promote good change through community involvement, training,
          and education. We believe that information is an incredibly potent tool that can improve communities
          and change lives. Our programs are designed to provide people with the skills they need to prosper
          in today's dynamic world.
        </Text>
        <Text style={styles.bodyText}>
          Empowering the Nation, which was established on the values of inclusion, creativity, and quality,
          provides a wide selection of workshops and courses designed to suit the needs of students at all
          stages of their academic and career paths.
        </Text>
        <Text style={styles.bodyText}>
          Our programs, ranging from technical expertise to personal growth, are crafted to motivate and prepare
          participants for success.
        </Text>
      </View>
    </ScrollView>
  );
};

// Contact Us Screen Component
const ContactScreen: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [enquiry, setEnquiry] = useState<string>('');
  const [errors, setErrors] = useState<{ name: boolean; surname: boolean; email: boolean; enquiry: boolean }>({
    name: false,
    surname: false,
    email: false,
    enquiry: false,
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    const newErrors = {
      name: !name,
      surname: !surname,
      email: !email || !validateEmail(email),
      enquiry: !enquiry,
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) {
      Alert.alert('Error', 'Please fill in all fields correctly');
      return;
    }

    console.log({ name, surname, email, enquiry });
    Alert.alert('Success', 'Your enquiry has been submitted');
    setName('');
    setSurname('');
    setEmail('');
    setEnquiry('');
    setErrors({ name: false, surname: false, email: false, enquiry: false });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/logo.jpg')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.heading}>Empowering the Nation</Text>
        </View>
        <Text style={styles.subHeading}>Contact us</Text>
        <Text style={styles.bodyText}>Phone: +27 82 645 7897</Text>
        <Text style={styles.bodyText}>Email: empoweringthenation@etn.co.za</Text>
        <Text style={styles.bodyText}>Address: 50 Hollyhock Street, Sandton, 2090</Text>
        <Text style={styles.bodyText}>Website: www.empoweringthenation.co.za</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.heading}>Enquiry Form</Text>
        <TextInput
          style={[styles.input, errors.name && styles.inputError]}
          placeholder="Your Name"
          placeholderTextColor="#CCCCCC" // Light gray for placeholder
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={[styles.input, errors.surname && styles.inputError]}
          placeholder="Your Surname"
          placeholderTextColor="#CCCCCC"
          value={surname}
          onChangeText={setSurname}
        />
        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          placeholder="Your Email"
          placeholderTextColor="#CCCCCC"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, errors.enquiry && styles.inputError]}
          placeholder="Your Enquiry"
          placeholderTextColor="#CCCCCC"
          value={enquiry}
          onChangeText={setEnquiry}
          multiline
        />
        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={handleSubmit} color="#FF851B" />
        </View>
      </View>
    </ScrollView>
  );
};

// Prices Screen Component
const PricesScreen: React.FC = () => {
  const courses: Course[] = [
    { title: 'First Aid (6 Month)', fees: 1500 },
    { title: 'Sewing (6 Month)', fees: 1500 },
    { title: 'Landscaping (6 Month)', fees: 1500 },
    { title: 'Life Skills (6 Month)', fees: 1500 },
    { title: 'Child Minding (6 Week)', fees: 750 },
    { title: 'Cooking  (6 Week)', fees: 750 },
    { title: 'Garden Maintenance (6 Week)', fees: 750 },
  ];

  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const handleSelectCourse = (courseTitle: string) => {
    setSelectedCourses((prev) => {
      if (prev.includes(courseTitle)) {
        return prev.filter((title) => title !== courseTitle);
      } else {
        return [...prev, courseTitle];
      }
    });
  };

  const getDiscount = (numberOfCourses: number) => {
    if (numberOfCourses === 1) return 0;
    if (numberOfCourses === 2) return 0.05;
    if (numberOfCourses === 3) return 0.10;
    return 0.15;
  };

  const calculateTotal = () => {
    const selected = courses.filter((course) =>
      selectedCourses.includes(course.title)
    );
    const totalFees = selected.reduce((sum, course) => sum + course.fees, 0);
    const discount = getDiscount(selected.length);
    return totalFees * (1 - discount);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/logo.jpg')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.heading}>Empowering the Nation</Text>
        </View>
        <Text style={styles.subHeading}>Course Prices</Text>
        {courses.map((course) => (
          <View key={course.title} style={styles.priceContainer}>
            <View style={styles.buttonContainer}>
              <Button
                title={
                  selectedCourses.includes(course.title)
                    ? `Deselect ${course.title}`
                    : `Select ${course.title}`
                }
                onPress={() => handleSelectCourse(course.title)}
                color="#FF851B" // Orange button color
              />
            </View>
            <Text style={styles.listItem}>{course.title}</Text>
            <Text style={styles.listItem}>Fees: R{course.fees}</Text>
          </View>
        ))}
        <Text style={styles.subHeading}>Total Fees: R{calculateTotal().toFixed(2)}</Text>
      </View>
    </ScrollView>
  );
};


// Courses Screen Component
const CoursesScreen: React.FC = () => {
  const courses: Course2[] = [
    { title: 'First Aid', des:'This content aims to provide first aid awareness and basic life support skills. It covers managing wounds, bleeding, burns, and fractures, as well as emergency scene management. Key topics include CPR for cardiac arrest and addressing respiratory distress, such as choking or blocked airways, to ensure effective emergency responses.', fees: 1500 },
    { title: 'Sewing', des:'The purpose of this content is to provide skills for alterations and new garment tailoring services. It covers types of stitches, threading a sewing machine, and sewing buttons, zips, hems, and seams. Additionally, it teaches techniques for alterations and designing and sewing new garments.', fees: 1500 },
    { title: 'Landscaping', des:'The purpose of this content is to offer landscaping services for both new and established gardens. It covers the use of indigenous and exotic plants and trees, integrating fixed structures like fountains, benches, and built-in braais, balancing plant and tree placement, and enhancing garden aesthetics through plant shapes and colors. Additionally, it focuses on overall garden layout design.', fees: 1500 },
    { title: 'Life Skills', des:'The purpose of this content is to provide essential skills for navigating basic life necessities. It covers how to open a bank account, an understanding of basic labor laws and rights, and foundational skills in reading, writing, and numeric literacy.', fees: 1500 },
  ];
  const courses2: Course2[] = [
    { title: 'Child Minding', des:'The purpose of this content is to provide basic skills for child and baby care. It covers the needs of babies from birth to six months, seven months to one year, and toddlers, as well as the importance of educational toys in their development.', fees: 750 },
    { title: 'Cooking', des:'The purpose of this content is to teach how to prepare and cook nutritious family meals. It covers the nutritional requirements for a healthy body, types of proteins, carbohydrates, and vegetables, meal planning, and the proper preparation and cooking of meals.', fees: 750 },
    { title: 'Garden Maintenance', des:'The purpose of this content is to provide basic knowledge of watering, pruning, and planting in a domestic garden. It covers water restrictions and the watering needs of indigenous and exotic plants, pruning and propagation methods, and planting techniques for various plant types.', fees: 750 },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/logo.jpg')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.heading}>Empowering the Nation</Text>
        </View>
        <Text style={styles.subHeading}>Courses</Text>
        <Text style={styles.subHeading}>6 Month Courses</Text>
        {courses.map((course) => (
          <View key={course.title} style={styles.priceContainer}>
            <Text style={styles.listItem3}>{course.title}</Text>
            <Text style={styles.listItem2}>{course.des}</Text>
            <Text style={styles.listItem3}>Fees: R{course.fees}</Text>
          </View>
        ))}
        <Text style={styles.subHeading}>6 Week Short Course</Text>
        {courses2.map((courses2) => (
          <View key={courses2.title} style={styles.priceContainer}>
            <Text style={styles.listItem3}>{courses2.title}</Text>
            <Text style={styles.listItem2}>{courses2.des}</Text>
            <Text style={styles.listItem3}>Fees: R{courses2.fees}</Text>
          </View>
        ))}
        <Text style={styles.subHeading}>Discounts</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.bodyText}>1 course 0% discount</Text>
          <Text style={styles.bodyText}>2 course 5% discount</Text>
          <Text style={styles.bodyText}>3 course 10% discount</Text>
          <Text style={styles.bodyText}>More than 3 courses 15% discount</Text>
        </View>
      </View>
    </ScrollView>
  );
};

// Tab Navigator
const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#001F3F' }, // Dark blue for tab bar
          tabBarActiveTintColor: '#FF851B', // Orange for active tab
          tabBarInactiveTintColor: '#FFFFFF', // White for inactive tab
        }}
      >
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{ tabBarIcon: ({ color }) => <Ionicons name="information-circle" size={24} color={color} /> }}
        />
        <Tab.Screen
          name="Courses"
          component={CoursesScreen}
          options={{ tabBarIcon: ({ color }) => <Ionicons name="book" size={24} color={color} /> }}
        />
        <Tab.Screen
          name="Prices"
          component={PricesScreen}
          options={{ tabBarIcon: ({ color }) => <Ionicons name="pricetag" size={24} color={color} /> }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{ tabBarIcon: ({ color }) => <Ionicons name="mail" size={24} color={color} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#001F3F', // Dark blue background
  },
  container: {
    flex: 1,
    padding: 16,
  },
  logoContainer: {
    flexDirection: 'row', // Arrange logo and title in a row
    alignItems: 'center', // Center items vertically
  },
  logo: {
    width: 150, // Adjust logo width
    height: 150,  // Adjust logo height
    marginLeft: -20,
  },
  ceo: {
    width: 160, 
    height: 200,
    marginLeft: 110,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FF851B', // Orange color for headings
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
    marginBottom: 10,
    color: '#FF851B', // Orange color for subheadings
  },
  bodyText: {
    fontSize: 16,
    textAlign: 'left',
    marginVertical: 5,
    marginBottom: 15,
    color: '#FFFFFF', // White color for body text
  },
  priceContainer: {
    marginVertical: 10,
    backgroundColor: '#003366', // Lighter dark blue for price container
    borderRadius: 8,
    padding: 10,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: '#FF851B', // Orange border color for inputs
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    color: '#FFFFFF', // White text color in input
  },
  inputError: {
    borderColor: 'red',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '100%',
  },
  listItem: {
    fontSize: 16,
    color: '#FFFFFF', // White color for list items
  },
  listItem2: {
    fontSize: 16,
    color: '#FFFFFF', // White color for list items
    marginVertical:2,
  },
  listItem3: {
    fontSize: 16,
    color: '#FFFFFF', // White color for list items
    marginVertical:2,
    fontWeight: 'bold',
  },
});

export default App;
