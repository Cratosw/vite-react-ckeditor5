import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Container, Stack, styled } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormCkeditor from './components/FormCkeditor';
import * as Yup from 'yup';

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    width: 100%;
    height: 100%;
    flex: 1;
    overflow-x: hidden;
`
);
interface FormFieldValues {
  description?: string;
}
function App() {
  const validationSchema: Yup.SchemaOf<FormFieldValues> = Yup.object().shape({
    description: Yup.string(),
  });
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFieldValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      description: '',
    },
  });
  const onSubmitForm: SubmitHandler<FormFieldValues> = async (
    data: FormFieldValues
  ) => {
    console.log('onSubmitForm', data);
  };
  return (
    <OverviewWrapper>
      <Box sx={{ p: 3 }}>
        <Stack
          spacing={4}
          component="form"
          onSubmit={handleSubmit(onSubmitForm)}
          sx={{ width: '500px' }}
        >
          <FormCkeditor<FormFieldValues>
            margin={'dense'}
            label={'描述'}
            control={control}
            name={'description'}
          ></FormCkeditor>
          <Stack direction="row" spacing={2}>
            <Button type="submit">保存</Button>
          </Stack>
        </Stack>
      </Box>
    </OverviewWrapper>
  );
}
export default App;
