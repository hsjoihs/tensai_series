using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        int img_size = 32;
        int yoko = 2;//横のつながりは２つ
        int tate = 3;
        private void Form1_Load(object sender, EventArgs e)
        {
            pictureBox1.Width = img_size * tate;
            pictureBox1.Height = img_size * yoko;
            
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }
    }
}
