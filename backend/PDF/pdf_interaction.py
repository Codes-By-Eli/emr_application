import jinja2
import pdfkit
import pathlib

class PDF_Interaction:
    def __init__(self):
        pass

    '''
    arguments:
        info: dictionary object containing the pdf information

        sample:
            info = {
                "client_name": "John Doe",
                "sex": "Male",
                "d_o_b": "03/27/1991",
                "record_number": "03124",
                "diagnosis": "Depression",
                "precautions": "N/A",
                "contraindications": "N/A",
                "date": "03/25/2023",
                "summary": "The client experienced flashes where they were beside themselves and considered a danger to themselves and others",
                "performance": "The client is has been noticing small happiness and activities that they enjoyed as a child",
                "recommendations": "We plan to keep introducing fun activities to the client that reminds them of their childhood",
                "billing": "978145"
            }

    '''
    def create_progress_pdf(self, info):
        try:
            directory = "./backend/PDF/templates"
            template_loader = jinja2.FileSystemLoader(searchpath = directory)
            template_env = jinja2.Environment(loader=template_loader)

            html_template = "progress_template.html"    
            template = template_env.get_template(html_template)
            output_text = template.render(info)

            pdf_path = "./backend/PDF/wkhtmltopdf/bin/wkhtmltopdf.exe"
            download_path = pathlib.Path.home() / "Downloads" / f"progress_{info['record_number']}_{info['name'].strip()}.pdf"

            config = pdfkit.configuration(wkhtmltopdf=pdf_path)
            pdfkit.from_string(output_text, download_path, configuration=config)
            print(f"Successfully made made Progress Note PDF!")
        except:
            print("Error converting the Progress Note to the pdf!")


    '''
    arguments:
        info: dictionary

    sample:
        info2 = {
            "client_name": "John Doe",
            "d_o_b": "03/27/1991",
            "date_of_eval": "03/25/2023",
            "record_number": "03124",
            "diagnosis": "Depression",
            "medical_hx": "Broken legs and arms",
            "prior_function": "Fully functioning body",
            "prior_living": "Lives with both parents and two siblings",
            "hearing": "Hears pretty good",
            "vision": "20/20",
            "a_o": "A&O Value",
            "memory": "Memory Value",
            "mmse_score": "40",
            "b_p": "80",
            "heart_rate": "120/80",
            "oxygen": "90",
            "R_R": "60",
            "pain": "Painful Value",
            "i_e": "6",
            "g_e": "9",
            "d_e": "N/A",
            "i_g": "5",
            "g_g": "8",
            "d_g": "N/A",
            "i_b": "0",
            "g_b": "3",
            "d_b": "N/A",
            "i_ubd": "2",
            "g_ubd": "4",
            "d_ubd": "N/A",
            "i_lbd": "2",
            "g_lbd": "4",
            "d_lbd": "N/A",
            "i_t": "3",
            "g_t": "5",
            "d_t": "N/A",
            "i_tt": "3",
            "g_tt" : "6",
            "d_tt" : "N/A",
            "i_st" : "7",
            "g_st" : "9",
            "d_st" : "N/A",
            "i_tut" : "6",
            "g_tut": "10",
            "d_tut" : "N/A",
            "adl" : "There were additional ADL and IADL observations during the evaluation of the patient.",
            "transfer" : "The client has good mobility for the current assessment of their abilities",
            "hand_dominance" : "R",
            "lse_r" : "6",
            "lse_m" : "7",
            "rse_r" : "2",
            "rse_m" : "5",
            "lsf_r" : "1",
            "lsf_m" : "3",
            "rsf_r" : "5",
            "rsf_m" : "8",
            "lsx_r" : "4",
            "lsx_m" : "6",
            "rsx_r" : "9",
            "rsx_m" : "8",
            "lsa_r" : "0",
            "lsa_m" : "2",
            "rsa_r" : "4",
            "rsa_m" : "6",
            "lhb_r" : "2",
            "lhb_m" : "3",
            "rhb_r" : "4",
            "rhb_m" : "1",
            "lhd_r" : "6",
            "lhd_m" : "7",
            "rhd_r" : "8",
            "rhd_m" : "9",
            "lir_r" : "2",
            "lir_m" : "3",
            "rir_r" : "5",
            "rir_m" : "7",
            "ler_r" : "1",
            "ler_m" : "1",
            "rer_r" : "3",
            "rer_m" : "4",
            "lef_r" : "5",
            "lef_m" : "7",
            "ref_r" : "8",
            "ref_m" : "9",
            "lee_r" : "3",
            "lee_m" : "2",
            "ree_r" : "1",
            "ree_m" : "7",
            "lfp_r" : "9",
            "lfp_m" : "6",
            "rfp_r" : "4",
            "rfp_m" : "2",
            "lfs_r" : "2",
            "lfs_m" : "5",
            "rfs_r" : "6",
            "rfs_m" : "7",
            "lwf_r" : "8",
            "lwf_m" : "5",
            "rwf_r" : "3",
            "rwf_m" : "2",
            "lwe_r" : "1",
            "lwe_m" : "9",
            "rwe_r" : "6",
            "rwe_m" : "3",
            "other_observations" : "The patient exhibits unease when speaking about familial matters.",
            "l_gs" : "3",
            "r_gs" : "4",
            "l_lp" : "5",
            "r_lp" : "6",
            "l_trp" : "1",
            "r_trp" : "2",
            "l_tp" : "7",
            "r_tp" : "9",
            "l_lt" : "8",
            "r_lt" : "5",
            "l_sd" : "6",
            "r_sd" : "4",
            "l_t" : "3",
            "r_t" : "5",
            "l_pro" : "4",
            "r_pro" : "3",
            "l_ste" : "6",
            "r_ste" : "8",
            "l_9h" : "9",
            "r_9h" : "2",
            "l_ed" : "1",
            "r_ed" : "1",
            "l_pain" : "0",
            "r_pain" : "7",
            "assessment_problems" : "The patient has difficulty holding things within their hands which leads to them dropping many objects on the floor.",
            "discharge_recommendation" : "Follow up with therapist/doctor once a month",
            "equipment_needs" : "Glove to support wrist",
            "patient_goals" : "To hold an item for minutes at a time",
            "length_stay" : "3 weeks",
            "long_goal" : "Full functionality of hands",
            "short_goal" : "Hold item for 15 seconds",
            "signature" : "Jane Smith",
            "date" : "03/25/2023",
            "billing_code" : "978456"
        }
    '''
    def create_initial_pdf(self, info):
        try:
            med_num = info['allValues']['med_num']
            name = info['allValues']['name'].strip()
        except KeyError as e:
            return {"success": False, "message": f"Missing key: {e}"}
        
        directory = "./backend/PDF/templates"
        template_loader = jinja2.FileSystemLoader(searchpath = directory)
        template_env = jinja2.Environment(loader=template_loader)

        html_template = "initial_template.html"    
        template = template_env.get_template(html_template)
        output_text = template.render(info['allValues'])

        pdf_path = "./backend/PDF/wkhtmltopdf/bin/wkhtmltopdf.exe"
        download_path = pathlib.Path.home() / "Downloads" / f"initial_{med_num}_{name}.pdf"

        config = pdfkit.configuration(wkhtmltopdf=pdf_path)
        pdfkit.from_string(output_text, download_path, configuration=config)

        return {"success": True, "message": "Initial Evaluation PDF file created successfully"}
        
    

    '''
    arguments:
        info: dictionary

    sample:
        info3 = {
            "client_name": "John Doe",
            "d_o_b": "03/27/1991",
            "date_of_eval": "03/25/2023",
            "record_number": "03124",
            "diagnosis": "Depression",
            "medical_hx": "Broken legs and arms",
            "prior_function": "Fully functioning body",
            "prior_living": "Lives with both parents and two siblings",
            "hearing": "Hears pretty good",
            "vision": "20/20",
            "a_o": "A&O Value",
            "memory": "Memory Value",
            "mmse_score": "40",
            "b_p": "80",
            "heart_rate": "120/80",
            "oxygen": "90",
            "R_R": "60",
            "pain": "Painful Value",
            "i_e": "6",
            "g_e": "9",
            "d_e": "8",
            "i_g": "5",
            "g_g": "8",
            "d_g": "7",
            "i_b": "0",
            "g_b": "3",
            "d_b": "2",
            "i_ubd": "2",
            "g_ubd": "4",
            "d_ubd": "3",
            "i_lbd": "2",
            "g_lbd": "4",
            "d_lbd": "3",
            "i_t": "3",
            "g_t": "5",
            "d_t": "4",
            "i_tt": "3",
            "g_tt" : "6",
            "d_tt" : "5",
            "i_st" : "7",
            "g_st" : "9",
            "d_st" : "8",
            "i_tut" : "6",
            "g_tut": "10",
            "d_tut" : "9",
            "adl" : "There were additional ADL and IADL observations during the evaluation of the patient.",
            "transfer" : "The client has good mobility for the discharge assessment of their abilities",
            "hand_dominance" : "R",
            "lse_r" : "6",
            "lse_m" : "7",
            "rse_r" : "2",
            "rse_m" : "5",
            "lsf_r" : "1",
            "lsf_m" : "3",
            "rsf_r" : "5",
            "rsf_m" : "8",
            "lsx_r" : "4",
            "lsx_m" : "6",
            "rsx_r" : "9",
            "rsx_m" : "8",
            "lsa_r" : "0",
            "lsa_m" : "2",
            "rsa_r" : "4",
            "rsa_m" : "6",
            "lhb_r" : "2",
            "lhb_m" : "3",
            "rhb_r" : "4",
            "rhb_m" : "1",
            "lhd_r" : "6",
            "lhd_m" : "7",
            "rhd_r" : "8",
            "rhd_m" : "9",
            "lir_r" : "2",
            "lir_m" : "3",
            "rir_r" : "5",
            "rir_m" : "7",
            "ler_r" : "1",
            "ler_m" : "1",
            "rer_r" : "3",
            "rer_m" : "4",
            "lef_r" : "5",
            "lef_m" : "7",
            "ref_r" : "8",
            "ref_m" : "9",
            "lee_r" : "3",
            "lee_m" : "2",
            "ree_r" : "1",
            "ree_m" : "7",
            "lfp_r" : "9",
            "lfp_m" : "6",
            "rfp_r" : "4",
            "rfp_m" : "2",
            "lfs_r" : "2",
            "lfs_m" : "5",
            "rfs_r" : "6",
            "rfs_m" : "7",
            "lwf_r" : "8",
            "lwf_m" : "5",
            "rwf_r" : "3",
            "rwf_m" : "2",
            "lwe_r" : "1",
            "lwe_m" : "9",
            "rwe_r" : "6",
            "rwe_m" : "3",
            "other_observations" : "The patient exhibits unease when speaking about familial matters.",
            "l_gs" : "3",
            "r_gs" : "4",
            "l_lp" : "5",
            "r_lp" : "6",
            "l_trp" : "1",
            "r_trp" : "2",
            "l_tp" : "7",
            "r_tp" : "9",
            "l_lt" : "8",
            "r_lt" : "5",
            "l_sd" : "6",
            "r_sd" : "4",
            "l_t" : "3",
            "r_t" : "5",
            "l_pro" : "4",
            "r_pro" : "3",
            "l_ste" : "6",
            "r_ste" : "8",
            "l_9h" : "9",
            "r_9h" : "2",
            "l_ed" : "1",
            "r_ed" : "1",
            "l_pain" : "0",
            "r_pain" : "7",
            "assessment_problems" : "The patient has difficulty holding things within their hands which leads to them dropping many objects on the floor.",
            "discharge_recommendation" : "Follow up with therapist/doctor once a month",
            "equipment_needs" : "Glove to support wrist",
            "patient_goals" : "To hold an item for minutes at a time",
            "rehab" : "Do wrist exercises 2-3 times a week for an hour",
            "referral" : "Refer to Dr. Harrington for further checkups",
            "education" : "B.S. Iona University",
            "signature" : "Jane Smith",
            "date" : "03/25/2023",
            "billing_code" : "978456"
        }
    
    '''

    def create_discharge_pdf(self, info):
        try:
            directory = "./backend/PDF/templates"
            template_loader = jinja2.FileSystemLoader(searchpath = directory)
            template_env = jinja2.Environment(loader=template_loader)

            html_template = "discharge_template.html"    
            template = template_env.get_template(html_template)
            output_text = template.render(info)

            pdf_path = "./backend/PDF/wkhtmltopdf/bin/wkhtmltopdf.exe"
            download_path = pathlib.Path.home() / "Downloads" / f"discharge_{info['med_num']}_{info['name'].strip()}.pdf"

            config = pdfkit.configuration(wkhtmltopdf=pdf_path)
            pdfkit.from_string(output_text, download_path, configuration=config)
        except:
            print("Error converting the Discharge Evaluation to the pdf!")        
        