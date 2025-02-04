import { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AddDispatch } from './redux/store';
import { useDispatch } from 'react-redux';
import { TextField, Button, Box, IconButton } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material'; // אייקון פלוס
import { addRecipe } from './redux/recipeSlice';
import { UsersContext } from './context/UserProvider';
export interface FormDataType {
    title: string;
    ingredients: string[];
    description?: string;
}
const schema = yup.object().shape({
    title: yup.string().matches(/^[A-Za-z\s]+$/, 'הכותרת חייבת להיות כתובה באנגלית בלבד').required('הכותרת היא דרישה'),
    ingredients: yup.array().of(yup.string().required('Each ingredient must be entered')).required('The ingredients must be entered'),
    description: yup.string()
});
const AddRecipe = () => {
    const useUserId = () => {
        const context = useContext(UsersContext);
        return context?.state.id;
    };
    const dispatch = useDispatch<AddDispatch>();
    const { control, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormDataType>({
        defaultValues: {
            title: '',
            ingredients: [''],
            description: ''
        },
        resolver: yupResolver(schema)
    });
    const userId = useUserId();
    const onSubmit = (data: FormDataType) => {
        if (userId !== undefined) {
            console.log(data.ingredients);
            dispatch(addRecipe({ newRecipe: data, userId }));
            alert('Recipe added successfully');
            setValue("title", '');
            setValue("description", '');
            setValue("ingredients", [''])
        } else {
            alert("User ID is undefined");
        }
    };
    const addProductField = () => {
        const currentProducts = watch("ingredients");
        setValue("ingredients", [...currentProducts, '']); // הוספת שדה מוצר חדש
    };
    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Controller
                name="title"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="כותרת"
                        variant="outlined"
                        fullWidth
                        error={!!errors.title}
                        helperText={errors.title ? errors.title.message : ''}
                    />)}/>
            <Controller
                name="description"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="תיאור"
                        variant="outlined"
                        fullWidth
                    />)} />
            <Box>
                <label>מוצרים:</label>
                {watch("ingredients").map((_, index) => (
                    <Controller
                        key={index}
                        name={`ingredients.${index}`}
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label={`מוצר ${index + 1}`}
                                variant="outlined"
                                fullWidth
                                sx={{ mb: 1 }}/>)}/>))}
                <IconButton onClick={addProductField} color="primary">
                    <AddIcon />
                </IconButton>
            </Box>
            {errors.ingredients && <span>{errors.ingredients.message}</span>}
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </Box>);};
export default AddRecipe;