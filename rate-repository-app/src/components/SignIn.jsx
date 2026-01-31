import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import theme from "../theme";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          formik.touched.username && formik.errors.username && styles.inputError,
        ]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorText}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.touched.password && formik.errors.password && styles.inputError,
        ]}
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  input: {
    fontFamily: theme.fonts.main,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "white",
  },
  inputError: {
    borderColor: "#d73a4a",
  },
  errorText: {
    color: "#d73a4a",
    marginTop: -10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#0366d6",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: theme.fonts.main,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default SignIn;
