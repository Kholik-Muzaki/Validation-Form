import imageForm from '../assets/Forms.gif'
import './Dashboard.css'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Dashboard = () => {

    const registerUser = () => {
        alert('Form Submitted')
        // alert(formik.values.password)
        // alert(formik.values.name)
        // alert(formik.values.email)
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        onSubmit: registerUser,
        validationSchema: yup.object().shape({
            name: yup.string().required("Nama harus di isi").min(3, 'Nama minimal 3 karakter').max(10, 'Nama maksimal 10 karakter'),
            email: yup.string().required('Email harus di isi').email('Email tidak valid'),
            password: yup.string().required('Password harus di isi').matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                'Password harus mengandung minimal 8 karakter, satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus'
            ),
        }),
    });

    const handleForm = (event) => {
        const { target } = event
        formik.setFieldValue(target.name, target.value)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 form-kiri">
                        <h2 className='text-center'>Validation Form</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                                    id="exampleInputName"
                                    onChange={handleForm}
                                    name='name'
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name && <div className="invalid-feedback">{formik.errors.name}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={handleForm}
                                    name="email"
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                                    id="exampleInputPassword1"
                                    onChange={handleForm}
                                    name="password"
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password && <div className="invalid-feedback">{formik.errors.password}</div>}
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 form-kanan">
                        <img src={imageForm} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard